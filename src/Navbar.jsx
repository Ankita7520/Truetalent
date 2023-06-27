import React,{useState,useEffect} from "react";
import "./Comp.css";
import {SlMagnifier,SlLocationPin} from "react-icons/sl";
import img1 from "./images/one.jpg";
import img2 from "./images/two.jpg";
import img3 from "./images/six.jpg";
import img4 from "./images/Np.png";
import img5 from "./images/five.jpg";
import img6 from "./images/10.png";
import img7 from "./images/12.png";
import img8 from "./images/13.png";
import img14 from "./images/14.jpg";
import {CiFacebook,CiTwitter} from "react-icons/ci";
import {AiOutlineLinkedin,AiOutlineYoutube,AiOutlineInstagram} from "react-icons/ai"
import {FaPhoneAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"



const Navbar=()=>{
    return(<div className="main">
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
                <button className="log"><a href="/register">Register</a></button>
            </div>
            </div>
        </nav>
        <div className="banner-main">
            <div className="banner">
            <div className="body">
            <h1 className="right">Get the <span>Right Job</span> You Deserve</h1>
            <p className="carrer">Your next carrer move starts here</p>
        </div>
        <div className="btt-main">
            <div className="btt-body">
                <div className="search">
            <button className="btt">Search Jobs</button>
            </div>
            <button className="btt" id="btt">Search Candidates</button>
            </div>
            <div className="input-main">
                <div className="input-skill">
                 <SlMagnifier className="magn"></SlMagnifier>   
                <input type="text" placeholder="Skill/Jobs role" className="inp"/>
                </div>
                <div className="input-city">
                    <div className="input-cityy">
                    <SlLocationPin className="location"></SlLocationPin>
                    <input type="text" placeholder="City" className="inp" id="inp-skill"/>
                    </div>
                    <div>
                        <button className="input-bttn"><SlMagnifier></SlMagnifier>Search</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        <div className="trust1">
            <div className="trust2">
                <h1 className="trust3"><span>Trusted by</span> top-tier companiens</h1>
            </div>
            <div className="trust-main">
                <div className="trust-body">
                    <img src={img1} alt="" className="trust-img"/>
                </div>
                <div  className="trust-body">
                    <img src={img2} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img3} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img4} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img5} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img6} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img7} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img8} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img5} alt="" className="trust-img"/>
                </div>
                <div  className="trust-body">
                    <img src={img8} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img2} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img6} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img4} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img3} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img1} alt="" className="trust-img"/>
                </div>
                <div className="trust-body">
                    <img src={img7} alt="" className="trust-img"/>
                </div>
            </div>
            
            
        </div>
        <div className="featured">
                <h3>Featured <span>Jobs</span> for you</h3>
            </div>
            <div>
        <div className="boxx-main">
        <div className="boxx-1">
           <div className="boxx-2">
           <img src={img1} alt="" className="box-img"/>
            <p className="box-head">Microsoft BizApps_F&O_Technical_Senior</p>
            <p className="box-time">Full Time 3Y-6Y</p>
            <div style={{display:"flex"}}>
            <SlLocationPin className="box-icon"></SlLocationPin>
              <p className="box-loc">India</p>
            </div>
           </div>
           <div style={{display:"flex"}}>
            <p className="box-bott">EY GODS</p>
            <div className="box-bottt">
            <p className="box-bot">1week ago</p>
            </div>
           </div>
        </div>
        <div className="boxx-1">
           <div className="boxx-2">
           <img src={img1} alt="" className="box-img"/>
            <p className="box-head">Microsoft BizApps_F&O_Technical_Senior</p>
            <p className="box-time">Full Time 3Y-6Y</p>
            <div style={{display:"flex"}}>
            <SlLocationPin className="box-icon"></SlLocationPin>
              <p className="box-loc">India</p>
            </div>
           </div>
           <div style={{display:"flex"}}>
            <p className="box-bott">EY GODS</p>
            <div className="box-bottt">
            <p className="box-bot">1week ago</p>
            </div>
           </div>
        </div>
        <div className="boxx-1">
           <div className="boxx-2">
           <img src={img1} alt="" className="box-img"/>
            <p className="box-head">Microsoft BizApps_F&O_Technical_Senior</p>
            <p className="box-time">Full Time 3Y-6Y</p>
            <div style={{display:"flex"}}>
            <SlLocationPin className="box-icon"></SlLocationPin>
              <p className="box-loc">India</p>
            </div>
           </div>
           <div style={{display:"flex"}}>
            <p className="box-bott">EY GODS</p>
            <div className="box-bottt">
            <p className="box-bot">1week ago</p>
            </div>
           </div>
        </div>
        <div className="boxx-1">
           <div className="boxx-2">
           <img src={img1} alt="" className="box-img"/>
            <p className="box-head">Microsoft BizApps_F&O_Technical_Senior</p>
            <p className="box-time">Full Time 3Y-6Y</p>
            <div style={{display:"flex"}}>
            <SlLocationPin className="box-icon"></SlLocationPin>
              <p className="box-loc">India</p>
            </div>
           </div>
           <div style={{display:"flex"}}>
            <p className="box-bott">EY GODS</p>
            <div className="box-bottt">
            <p className="box-bot">1week ago</p>
            </div>
           </div>
        </div>
        <div className="boxx-1">
           <div className="boxx-2">
           <img src={img1} alt="" className="box-img"/>
            <p className="box-head">Microsoft BizApps_F&O_Technical_Senior</p>
            <p className="box-time">Full Time 3Y-6Y</p>
            <div style={{display:"flex"}}>
            <SlLocationPin className="box-icon"></SlLocationPin>
              <p className="box-loc">India</p>
            </div>
           </div>
           <div style={{display:"flex"}}>
            <p className="box-bott">EY GODS</p>
            <div className="box-bottt">
            <p className="box-bot">1week ago</p>
            </div>
           </div>
        </div>
        <div className="boxx-1">
           <div className="boxx-2">
           <img src={img1} alt="" className="box-img"/>
            <p className="box-head">Microsoft BizApps_F&O_Technical_Senior</p>
            <p className="box-time">Full Time 3Y-6Y</p>
            <div style={{display:"flex"}}>
            <SlLocationPin className="box-icon"></SlLocationPin>
              <p className="box-loc">India</p>
            </div>
           </div>
           <div style={{display:"flex"}}>
            <p className="box-bott">EY GODS</p>
            <div className="box-bottt">
            <p className="box-bot">1week ago</p>
            </div>
           </div>
        </div>
      </div>
      </div>
      <div>
        <div style={{textAlign:"center"}}>
        <h3>Featured <span>Gigs </span>for you</h3>
        </div>
        <div className="gigs-main">
           <div className="gigs-box">
            <div className="gigs-body">
                <img src={img4} alt="" className="gigs-img"/>
                <p className="gigs-head">Content Creator</p>
                 <p className="gigs-hour">Hourly</p>
                 <div className="gigs-location">
                    <SlLocationPin className="gigs-loc"></SlLocationPin>
                    <p className="gigs-city">Bangalore</p>
                 </div>
            </div>
            <div className="gigs-foot">
                <p className="gigs-footer">NexionPro Services...</p>
            </div>
           </div>
           <div className="gigs-box">
            <div className="gigs-body">
                <img src={img4} alt="" className="gigs-img"/>
                <p className="gigs-head">Content Creator</p>
                 <p className="gigs-hour">Hourly</p>
                 <div className="gigs-location">
                    <SlLocationPin className="gigs-loc"></SlLocationPin>
                    <p className="gigs-city">Bangalore</p>
                 </div>
            </div>
            <div className="gigs-foot">
                <p className="gigs-footer">NexionPro Services...</p>
            </div>
           </div>
           <div className="gigs-box">
            <div className="gigs-body">
                <img src={img4} alt="" className="gigs-img"/>
                <p className="gigs-head">Content Creator</p>
                 <p className="gigs-hour">Hourly</p>
                 <div className="gigs-location">
                    <SlLocationPin className="gigs-loc"></SlLocationPin>
                    <p className="gigs-city">Bangalore</p>
                 </div>
            </div>
            <div className="gigs-foot">
                <p className="gigs-footer">NexionPro Services...</p>
            </div>
           </div>
           <div className="gigs-box">
            <div className="gigs-body">
                <img src={img4} alt="" className="gigs-img"/>
                <p className="gigs-head">Content Creator</p>
                 <p className="gigs-hour">Hourly</p>
                 <div className="gigs-location">
                    <SlLocationPin className="gigs-loc"></SlLocationPin>
                    <p className="gigs-city">Bangalore</p>
                 </div>
            </div>
            <div className="gigs-foot">
                <p className="gigs-footer">NexionPro Services...</p>
            </div>
           </div>
           <div className="gigs-box">
            <div className="gigs-body">
                <img src={img4} alt="" className="gigs-img"/>
                <p className="gigs-head">Content Creator</p>
                 <p className="gigs-hour">Hourly</p>
                 <div className="gigs-location">
                    <SlLocationPin className="gigs-loc"></SlLocationPin>
                    <p className="gigs-city">Bangalore</p>
                 </div>
            </div>
            <div className="gigs-foot">
                <p className="gigs-footer">NexionPro Services...</p>
            </div>
           </div>
           <div className="gigs-box">
            <div className="gigs-body">
                <img src={img4} alt="" className="gigs-img"/>
                <p className="gigs-head">Content Creator</p>
                 <p className="gigs-hour">Hourly</p>
                 <div className="gigs-location">
                    <SlLocationPin className="gigs-loc"></SlLocationPin>
                    <p className="gigs-city">Bangalore</p>
                 </div>
            </div>
            <div className="gigs-foot">
                <p className="gigs-footer">NexionPro Services...</p>
            </div>
           </div>
        </div>
      </div>
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

     
     )
    
}


export default Navbar