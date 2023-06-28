import React from "react";
import { useNavigate } from "react-router-dom";
import {CiFacebook,CiTwitter} from "react-icons/ci";
import {AiOutlineLinkedin,AiOutlineYoutube,AiOutlineInstagram} from "react-icons/ai"

const Register=()=>{

    let navigate=useNavigate();
    let candi=()=>{
        navigate("/candidate")
    }
    let employer=()=>{
        navigate("/employer")
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
                <a href="" className="tt">TT Gig</a>
            </div>
            <div className="bttn">
                <button className="log" id="log"><a href="/login">Login</a></button>
                <button className="log" id="reg">Register</button>
            </div>
            </div>
        </nav>
        <div className="reg-main">
            
            <div className="reg-1">
                <div>
                <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="reg-img"/>
                <h1 className="reg-head">Experience Hiring 2.0 with <span>TrueTalent</span></h1>
                <button className="reg-but">Learn more about TrueTalent</button>
                </div>
            </div>
            
            <div className="reg-2">
                
               <div className="reg-candi" onClick={candi}>
                <img src="https://truetalent.io/static/media/candidate.1f92a671.svg" alt="" className="reg-candi-img"/>
                <p className="reg-text"><span>I'm a candidate</span> </p>
                <h6 className="reg-job">I am here to find my next job</h6>
               </div>
               <div className="reg-candi" onClick={employer}>
                <img src="https://truetalent.io/static/media/employer.4a450d68.svg" alt="" className="reg-candi-img"/>
                <p className="reg-text"><span>I'm an employer</span></p>
                <h6 className="reg-job">I am here to look for job <br />seekers</h6>
               </div>
               </div>
            
        </div>
        <div>
        <div className="foot-main">
                <footer>
                   <div className="foot-first">
                   <a href="" className="foot-1">Home</a>
                        <a href="" className="foot-1">About Us</a>
                        <a href="/Contactus" className="foot-1">Contact Us</a>
                        <a href="" className="foot-1">Giveaway</a>
                        <a href="" className="foot-1">Blog</a>
                        <a href="" className="foot-1">TermsofUse&PrivacyPolicy</a>
                   </div>
                    <div style={{display:"flex"}}>
                        <p className="foot-2">All rights reserved@2023FindProTechnologySolutionsPvt.Ltd</p>
                        <p className="foot-3">StayConnected<CiFacebook className="foot-4"></CiFacebook><AiOutlineLinkedin className="foot-4"></AiOutlineLinkedin><CiTwitter className="foot-4"></CiTwitter><AiOutlineInstagram className="foot-4"></AiOutlineInstagram><AiOutlineYoutube className="foot-4"></AiOutlineYoutube></p>
                    </div>
                </footer>

            </div>
        </div>
        </div>
    )
}


export default Register