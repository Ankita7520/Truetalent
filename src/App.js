import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar";


const App=()=>{
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar></Navbar>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
    )
}


export default App