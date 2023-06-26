import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar";
import Flask from "./Flask";


const App=()=>{
    return(
    <div>
        {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar></Navbar>}></Route>
        </Routes>
        </BrowserRouter> */}
        <Flask></Flask>
    </div>
    )
}


export default App