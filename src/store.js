import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";

const books = (state = [], action) => {
    if (action.type === 'SET_BOOKS') {
        return action.books
    }
    if (action.type === 'ADD_BOOK') {
        return [...state, action.books]
        // return state = {...state, books: [...state.books, action.books]}
    }
    return state
}

const reducer = combineReducers({ books })

const store = createStore(reducer, applyMiddleware(thunk, logger))


export const fetchBooks = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/books')
        dispatch({ type: 'SET_BOOKS', books: response.data})
    }
}

export const addBook = (book) => {
    return async(dispatch) => {
        const response = await axios.post('/api/books', book)
        dispatch({ type: 'ADD_BOOK', books: response.data})
    }
}

export default store 