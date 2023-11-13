import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "./SliceBooks";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
export default function AddBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const dispatch=useDispatch()
  const navigate=useNavigate()
 
    // console.log("lafjalhg",numberofBooks)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const book={id:uuidv4(), title,author}
    dispatch(addBooks(book))
    navigate("/viewbook")
  }
  return (
    <div className="bg-[url('../../public/photo/Libraries.jpg')] bg-cover h-screen p-4 " > 
      {/* <div className="h-[10rem] w-[10rem]  bg-gradient-to-r from-pink-400 to-blue-500 rounded-full absolute left-96 -top-26 transform rotate-180 animate-pulse"></div>
      <div className="h-[20rem] w-[20rem]  bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute -right-10 -top-36 transform rotate-180 animate-pulse"></div>
      <div className="h-[25rem] w-[25rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute -bottom-10 -left-20 transform rotate-180 animate-pulse"></div> */}
      <div className="flex flex-col mx-auto mt-5 max-w-[550px]  p-6 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
      <h1 className="text-center font-bold  mt-4 text-2xl">Add Book</h1>
      <div className="form-field w-[500px] mx-auto mt-5 rounded-xl">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="p-4  text-xl font-bold">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-[250px] ml-6 mt-2 p-2 rounded-xl"
        />
        <br />
        <label htmlFor="author" className="p-4  text-xl font-bold">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-[250px] ml-3 mt-3 p-2 rounded-xl"
        />
        <br />
        <button className="text-lg bg-sky-400 rounded-lg p-2 m-3 flex mx-auto  hover:bg-sky-700 ">Add Book</button>
      </form>
      </div>
      </div>
    </div>
  );
}
