import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Contactus from './Contactus'
import Candidate from "./Candidate";
import Employer from "./Employer";
import Aboutus from "./Aboutus";
import Gigs from "./Gigs";
import Forgot from "./Forgot";
import Policy from "./Policy";
import Filter from "./Filter"




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
             <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route> 
            <Route path="/gigs" element={<Gigs></Gigs>}></Route>
            <Route path="/forgot" element={<Forgot></Forgot>}></Route>
            <Route path="/policy" element={<Policy></Policy>}></Route>
            <Route path="Filter" element={<Filter></Filter>}></Route>
        </Routes>
       </BrowserRouter>
      
         {/* <Flask></Flask> */}
    </div>
    )
}


export default App