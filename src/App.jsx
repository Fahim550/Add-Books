import { useState } from 'react'
import {  BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import { allRouters } from './router/AllRoouter'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import AddBook from './fetaures/AddBook'
import ViewBook from './fetaures/ViewBook'
import Error from './pages/Error'
import EditBook from './fetaures/EditBook'


function App() {
const router=createBrowserRouter(allRouters)
  return (
    <>
    {/* <Navbar/> */}
     {/* <RouterProvider router={router}/> */}
     <BrowserRouter>
     <Navbar/>
     <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/viewbook' element={<ViewBook/>}/>
        <Route path='/editbook' element={<EditBook/>}/>
        <Route path='*' element={<Error/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
     </main>
     </BrowserRouter>
    </>
  )
}

export default App
