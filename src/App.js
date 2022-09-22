import React, { useEffect } from 'react'
import Book from './Book'
import {fetchBooks} from './store'
import { useSelector, useDispatch } from 'react-redux'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import AddBook from './AddBook'
import { Routes, Route, Link } from "react-router-dom";



const App = () => {
    console.log('test')

    const { books } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBooks())
    }, [])

    console.log(books)

    return(
        <div>
            <div className='canvas'>
                <nav>
                    <Link to={'/addBook'} className="add-book-popup-button">+</Link>
                    <Link to={'/'} >Home</Link>
                    <Link to={'/collections'} >Collections</Link>
                </nav>
                <Canvas camera={{position: [0,0,10]}} >
                    {books.map((book, i) => {
                        return (
                           <Book 
                            key={book.id}
                            title={book.title} 
                            author={book.author}
                            length={book.pageCount / 200}
                            position={((i + 1) * 4)}
                            frontCover={book.frontCover}
                            description={book.description}
                            />
                        )
                    })}
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                 
                </Canvas>
            </div>
            <Routes>
                    <Route path='/addBook' element={<AddBook />}></Route>
                    <Route path='/' element={<></>}></Route>
                    <Route path='/collections' element={<></>}></Route>
            </Routes>

            
        </div>
    )
}

export default App