import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"
import {AiOutlineMail} from "react-icons/ai"
import {FiLock,FiEye} from "react-icons/fi"
import { useNavigate } from "react-router-dom";


const Login=()=>{
    let[pass,setpassword]=useState(true)

    const [email , setemail] = useState("")
    const [pasword, setpasword] = useState("")
    let password=()=>{
        setpassword(!pass)
    }
     let navigate=useNavigate()

    let forgot=()=>{
        navigate("/forgot")
    }
    let giga=()=>{
        navigate("/Gigs")
    }
   

    let handlesubmit=()=>{
        if (email === "") {
            alert("Please enter Email")
            return
        }
        if (pasword === "") {
            alert("Please enter Password")
        } else {
            alert("Login Successfull")
        }
        
    }
    return(
        <div>
             <nav>
             <div className="nav-main">
             <div className="img-main">
                 <img src="https://truetalent.io/static/media/logo.e8c72fdf.svg" alt="" className="img"/>
         </div>
             <div className="tt-main">
                 <a href="" className="tt" id="tt1">TT Essential</a>
    //             <a href="" className="tt" onClick={giga}>TT Gig</a>
    //         </div>
    //         <div className="bttn">
    //             <button className="log" id="log"><a href="/login">Login</a></button>
    //             <button className="log"><a href="/register">Register</a></button>
    //         </div>
    //         </div>
    //     </nav>
    //     <div style={{display:"flex"}} className="tt-flex">
            
    //         <div className="reg">
                 <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="cover"/>
                 <div>
                    <h3 className="dream">Experience Hiring 2.0 with <span>True Talent</span></h3>
                 </div>
                 <div style={{textAlign:"center"}}>
                     <button className="learn"><span>Learn more about TrueTalent</span></button>
                 </div>
                 </div>
                <div className="sign">
                     <h3 className="inlog">Log in to True Talent</h3>
                     <div>
                         <div className="ic-ai">
                         <AiOutlineMail className="ao" ></AiOutlineMail>
                      
                       <input type="email" placeholder="Email" className="email" onChange={e=>setemail(e.target.value)}/><br></br>
                       </div>
                       <div className="ic-fi">
                     <FiLock className="fl"></FiLock>
                       <input type={pass?"text": "password"}  placeholder="Password" className="password" onChange={e=>setpasword(e.target.value)}/>
                       <FiEye id="ic-ai" onClick={password}></FiEye>
                       </div>
                       <div style={{display:"flex"}}>
                       <input type="checkbox" className="RM"/> <label htmlFor="" id="MR">Remember Me</label><br></br>
                       <h5 className="fg" onClick={forgot}>Forgot Password?</h5>
                      </div>

                      
                 </div>
                   <div>
                    <button className="SI" onClick={handlesubmit}>Sign in</button><br></br>
                       <h5 className="or"> ____________________________OR___________________________</h5>
                       <button className="google">
                           <FcGoogle className="gg"></FcGoogle>Continue with Google</button>
                       <h4 className="JS">(For Job seekers only)</h4>
                 </div>
         </div>

      </div>
      </div>
  )
}
export default Login