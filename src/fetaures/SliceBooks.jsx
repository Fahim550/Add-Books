import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';
const initilialBooks={
    books:[
        {id:uuidv4(), title:"Love Bangladesh", author:'Fahim Rahman'},
        {id:uuidv4(), title:"week in english", author:'Fahim Ahmed'},
    ]
}

export const bookSlice=createSlice({
    name:"books ",
    initialState:initilialBooks,
    reducers:{
        showBooks:(state)=>state,
        addBooks:(state,action)=>{
            state.books.push(action.payload)
        },
        updateBooks:(state,action)=>{
            const {id,title,author}=action.payload
            const isBookExist=state.books.filter((book)=>book.id===id)
            if(isBookExist){
                isBookExist[0].title=title
                isBookExist[0].author=author
            }
        },
        deleteBooks:(state,action)=>{
            const id=action.payload
            state.books=state.books.filter(book=>book.id !==id)
        },
    }
})
export const {addBooks, showBooks,deleteBooks,updateBooks}=bookSlice.actions;
export default bookSlice.reducer