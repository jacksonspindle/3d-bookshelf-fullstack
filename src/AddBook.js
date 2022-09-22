import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addBook } from "./store";

const AddBook = () => {
    const { books } = useSelector(state => state)
    const dispatch = useDispatch()
  
    const [newBookTitle, setNewBookTitle] = useState('')
    const [newBookAuthor, setNewBookAuthor] = useState('')
    const [newBookFrontCover, setNewBookFrontCover] = useState('')
    const [newBookBackCover, setNewBookBackCover] = useState('')
    const [newBookPageCount, setNewPageCount] = useState(0)
    const [newBookDescription, setNewBookDescription] = useState('')
    
    const [newBook, setNewBook] = useState({
        title: newBookTitle, 
        author: newBookAuthor, 
        frontCover: newBookFrontCover, 
        backCover: newBookBackCover, 
        pageCount: newBookPageCount, 
        description: newBookDescription
    })

      const _addBook = (ev) => {
        ev.preventDefault()
        dispatch(addBook(newBook))
    }

    return (
        <div className="add-book-popup">
            <form className="add-book-form" onSubmit={_addBook}>
                <input placeholder="Book Title" onChange={(e) => {
                    setNewBookTitle(e.target.value)
                    setNewBook({
                        title: newBookTitle, 
                        author: newBookAuthor, 
                        frontCover: newBookFrontCover, 
                        backCover: newBookBackCover, 
                        pageCount: newBookPageCount * 1, 
                        description: newBookDescription                       
                    })
                }}></input>
                <input placeholder="Author" onChange={(e) => {
                    setNewBookAuthor(e.target.value)
                    setNewBook({
                        title: newBookTitle, 
                        author: newBookAuthor, 
                        frontCover: newBookFrontCover, 
                        backCover: newBookBackCover, 
                        pageCount: newBookPageCount * 1, 
                        description: newBookDescription
                    })
                }}></input>
                <input placeholder="# of Pages" onChange={(e) => {
                    setNewPageCount(e.target.value)
                    setNewBook({
                        title: newBookTitle, 
                        author: newBookAuthor, 
                        frontCover: newBookFrontCover, 
                        backCover: newBookBackCover, 
                        pageCount: newBookPageCount * 1, 
                        description: newBookDescription
                    })
                }}></input>
                <input placeholder="Cover Image" onChange={(e) => {
                    setNewBookFrontCover(e.target.value)
                    setNewBook({
                        title: newBookTitle, 
                        author: newBookAuthor, 
                        frontCover: newBookFrontCover, 
                        backCover: newBookBackCover, 
                        pageCount: newBookPageCount * 1, 
                        description: newBookDescription
                    })
                }}></input>
                <input placeholder="description" onChange={(e) => {
                    setNewBookDescription(e.target.value)
                    setNewBook({
                        title: newBookTitle, 
                        author: newBookAuthor, 
                        frontCover: newBookFrontCover, 
                        backCover: newBookBackCover, 
                        pageCount: newBookPageCount * 1, 
                        description: newBookDescription
                    })
                }}></input>
                
                <button>Add Book</button>
            </form>
        </div>
    )
}

export default AddBook