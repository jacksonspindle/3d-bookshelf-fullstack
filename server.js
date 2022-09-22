const express = require('express')
const app = express()
const { conn, Book, seed } = require('./db')
const path = require('path')

app.use(express.json());

app.use('/dist', express.static('dist'))
app.use('/assets', express.static('assets'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.post('/api/books', async(req, res, next) => {
    try {
        res.status(201).send(await Book.create(req.body));
    } catch (ex) {
        next(ex)
    }
})

app.get('/api/books', async(req, res, next) => {
    try {
        res.send(await Book.findAll())
    } catch (ex) {
        next(ex)
    }
})

const init = async() => {
    try {
        await conn.sync({force: true})
        await seed()
        const port = process.env.PORT || 3000
        app.listen(port, () => console.log(`listening on port ${port}`))
    } catch (ex) {
        console.log(ex)
    }
}

init()