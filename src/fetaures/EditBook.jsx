import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { updateBooks } from "./SliceBooks"


export default function EditBook() {
    const location=useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [id,setId]=useState(location.state.id)
    const [title,setTitle]=useState(location.state.title)
    const [author,setAuthor]=useState(location.state.author)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateBooks( {id,title,author}))
        navigate('/viewbook')
    }
  return (
    <div>
        <h1 className="text-center font-bold  mt-4 text-xl">Edit Book</h1>
        <div className="form-field w-[500px] bg-zinc-400 mx-auto mt-5 rounded-xl">
        <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="p-4">Title:</label>
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
        <label htmlFor="author" className="p-4">Author:</label>
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
        <button className="bg-sky-400 rounded-lg p-2 m-3  ">Update Book</button>
      </form>
      </div>
    </div>

  )
}
