import { configureStore } from "@reduxjs/toolkit";
import  booksReducer  from "../fetaures/SliceBooks";



const store=configureStore({
    reducer:{
        booksReducer:booksReducer,
    }
})
export default store;