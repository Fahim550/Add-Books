import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "./SliceBooks";
import { Link } from "react-router-dom";

export default function ViewBook() {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch=useDispatch()
  const handleDeleteBook=(id)=>{
        dispatch(deleteBooks(id));
  }
  return (
    <div className="w-full relative p-5 bg-slate-950 overflow-hidden">
      <div className="h-[10rem] w-[10rem]  bg-gradient-to-r from-pink-400 to-blue-500 rounded-full absolute left-96 -top-26 transform rotate-180 animate-pulse"></div>
      <div className="h-[20rem] w-[20rem]  bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute -right-10 -top-36 transform rotate-180 animate-pulse"></div>
      <div className="h-[25rem] w-[25rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute -bottom-10 -left-20 transform rotate-180 animate-pulse"></div>
      
      <div className="flex flex-col mx-auto mt-5 max-w-[600px]  p-6 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ">
      <h2 className="text-center text-white font-bold text-2xl">List of Books</h2>
      <table className="m-5 max-w-[550px] text-white text-xl font-semibold mx-auto border-1 border-solid border-black">
        <thead>
          <tr>
            {/* <th className="border-2 borser-solid border-black p-4">ID</th> */}
            <th className="border-2 borser-solid border-black p-4">Title</th>
            <th className="border-2 borser-solid border-black p-4">Author</th>
            <th className="border-2 borser-solid border-black p-4">Action</th>
          </tr>
        </thead>
       
        <tbody>
          {books.map((book) => {
            const { id, title, author } = book;
            console.log(book);
            return (
              <tr key={id}>
                {/* <td className="border-2 borser-solid border-black p-4">{id}</td> */}
                <td className="border-2 borser-solid border-black p-4">
                  {title}
                </td>
                <td className="border-2 borser-solid border-black p-4">
                  {author}
                </td>
                <td className="border-2 borser-solid border-black p-4">
                  <Link to="/editbook" state={{id,title,author}}>
                  <button className="w-20 m-2 p-1 rounded-lg cursor-pointer bg-green-400 hover:bg-black hover:text-white ">
                    Edit
                  </button>
                  </Link>
                  <button className="w-20 m-2 p-1 rounded-lg cursor-pointer bg-red-400 hover:bg-black hover:text-white " onClick={()=>{handleDeleteBook(id)}}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}
