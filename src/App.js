import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar";
import Flask from "./Flask";
import Login from "./Login";


const App=()=>{
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar></Navbar>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
       </BrowserRouter>
        // {/* <Flask></Flask> */}
    </div>
    )
}


export default App