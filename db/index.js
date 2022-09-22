const { UUID, UUIDV4, STRING, INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/3d-bookshelf-db')

const Book = conn.define('book', {
    id: {
        type: UUID, 
        defaultValue: UUIDV4,
        primaryKey: true 
    }, 
    title: {
        type: STRING, 
        allowNull: false
    }, 
    author: {
        type: STRING, 
        allowNull: false 
    }, 
    frontCover: {
        type: STRING, 
    },
    backCover: {
        type: STRING
    }, 
    pageCount: {
        type: INTEGER
    },
    description: {
        type: Sequelize.DataTypes.TEXT
    }
})

const seed = () => {
    Promise.all([
        Book.create({title: 'Leonardo DaVinci', author: 'F. Scott Fitzgerald', frontCover: 'daVinciCover.jpeg', backCover: '', pageCount: 480, description: 'The Great Gatsby, F. Scott Fitzgeralds third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s.'}),
        Book.create({title: 'Into the Wild', author: 'Jon Krakauer', frontCover: 'intoTheWildCover.jpeg', backCover: '', pageCount: 203, description: 'In April, 1992, a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley. His name was Christopher Johnson McCandless. He had given $25,000 in savings to charity, abandoned his car and most of his possessions, burned all the cash in his wallet, and invented a new life for himself. Four months later, a party of moose hunters found his decomposed body. How McCandless came to die is the unforgettable story of Into the Wild.'}),
        Book.create({title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', frontCover: 'greatGatsbyCover.jpeg', backCover: '', pageCount: 180, description: 'The Great Gatsby, F. Scott Fitzgeralds third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s.'}),

    // Book.create({title: 'The Dark Horse', author: 'F. Scott Fitzgerald', frontCover: '', backCover: '', pageCount: 180, description: 'The Great Gatsby, F. Scott Fitzgeralds third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s.'}),
        // Book.create({title: 'The Dark Horse', author: 'F. Scott Fitzgerald', frontCover: '', backCover: '', pageCount: 180, description: 'The Great Gatsby, F. Scott Fitzgeralds third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s.'}),
        // Book.create({title: 'The Dark Horse', author: 'F. Scott Fitzgerald', frontCover: '', backCover: '', pageCount: 180, description: 'The Great Gatsby, F. Scott Fitzgeralds third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s.'}),
    ])
}


module.exports = {
    conn, 
    Book,
    seed
}