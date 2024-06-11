import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";

const App = () =>{
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/book/create" element={<CreateBook/>}/>
      <Route path="/book/edit/:id" element={<EditBook/>}/>
      <Route path="/book/delete/:id" element={<DeleteBook/>}/>
      <Route path="/book/details/:id" element={<ShowBook/>}/>
    </Routes>
     {/* <div className='bg-red-400 text-white'>
       App
     </div> */}
    </>
  )
}
export default App