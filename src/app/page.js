'use client';
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./create";
import { useState } from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";


export default function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Routes>
            <Route exact path="/"  element = {<Home/>}></Route>
            <Route path = "/create" element = {<Create/>}></Route>   
          </Routes>
        </div>
      </div>
    </Router>
  );
}