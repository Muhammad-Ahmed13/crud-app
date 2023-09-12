import React from "react";
//  import '../App.css'; 
 import Create from "../crudApp/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Read";
import Update from "./Update";






function Crud() {

    return (
        <div className="container">
        <BrowserRouter>
        <Routes>
     
        <Route exact path="/" element={<Create />}></Route>
        <Route exact path="/read" element={<Read />}></Route>
        <Route exact path="/update" element={<Update />}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )




}




export default Crud;






