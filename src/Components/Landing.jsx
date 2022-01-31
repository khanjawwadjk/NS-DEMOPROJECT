import React from "react";
// import { Practice } from "./Practice";
import Login from "./Login";
import {HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import AddEmp from "./AddEmp";
import EditEmp from "./EditEmp";
import AddedProds from "./AddedProds";



export const Landing = () =>{
    // const initialState = {
    //     name:"Jawwad",
    //     age:"21"
    // }
    return(
        // <Practice details={initialState}/>
<div>


        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/prods" element={<Products />} />
                <Route path="/addemp" element={<AddEmp />} />
                <Route path="/home/editemp/:id" element={<EditEmp />} />
                <Route path="/added" element={<AddedProds />} />
            </Routes>
        </HashRouter>
        </div>
        
    )
}