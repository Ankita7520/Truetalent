import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar";
import Flask from "./Flask";
import Login from "./Login";
import Register from "./Register";
import Contactus from './Contactus'
import Candidate from "./Candidate";
import Employer from "./Employer";



const App=()=>{
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar></Navbar>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/Contactus" element={<Contactus></Contactus>}></Route>
            <Route path="/candidate" element={<Candidate></Candidate>}></Route>
            <Route path="/employer" element={<Employer></Employer>}></Route>
        </Routes>
       </BrowserRouter>
      
         {/* <Flask></Flask> */}
    </div>
    )
}


export default App