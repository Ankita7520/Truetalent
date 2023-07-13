import React from "react";
import {useNavigate} from "react-router-dom"
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
import img9 from "./images/wppp.png"

import img14 from "./images/14.jpg"
import {CiFacebook,CiTwitter} from "react-icons/ci";
import {AiOutlineLinkedin,AiOutlineYoutube,AiOutlineInstagram} from "react-icons/ai"
import {FaPhoneAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"



const Navbar=()=>{
    let navigate=useNavigate();
    let gigu=()=>{
         navigate("/Gigs")
    }
    let magn=()=>{
        navigate("/Filter")
    }
    
    return(
    <div className="main">
        <nav>
            <div className="nav-main">
            <div className="img-main">
                <img src="https://truetalent.io/static/media/logo.e8c72fdf.svg" alt="" className="img"/>
            </div>
            <div className="tt-main">
                <a href="" className="tt" id="tt1">TT Essential</a>
                <a href="" className="tt" onClick={gigu}>TT Gig</a>
            </div>
            <div className="bttn">
                <button className="log" id="log"><a href="/login">Login</a></button>
                <button className="log" ><a href="/register">Register</a></button>
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
                        <button className="input-bttn" onClick={magn}><SlMagnifier></SlMagnifier>Search</button>
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
      <div>
       <a href="https://wa.me/9731509731" target="_blank"><img src={img9} alt="" className="wp-ic"/></a>
      </div>
     
      {/* <div className="foot-main">
                <footer>
                   <div className="foot-first">
                   <a href="" className="foot-1">Home</a>
                        <a href="/Aboutus" className="foot-1">About Us</a>
                        <a href="/Contactus" className="foot-1">Contact Us</a>
                        <a href="" className="foot-1">Giveaway</a>
                        <a href="/Blog" className="foot-1">Blog</a>
                        <a href="" className="foot-1">TermsofUse&PrivacyPolicy</a>
                   </div>
                    <div style={{display:"flex"}}>
                        <p className="foot-2">All rights reserved@2023FindProTechnologySolutionsPvt.Ltd</p>
                        <p className="foot-3">StayConnected<CiFacebook className="foot-4"></CiFacebook><AiOutlineLinkedin className="foot-4"></AiOutlineLinkedin><CiTwitter className="foot-4"></CiTwitter><AiOutlineInstagram className="foot-4"></AiOutlineInstagram><AiOutlineYoutube className="foot-4"></AiOutlineYoutube></p>
                    </div>
                </footer>

            </div> */}
            <div className="footer">
    <footer style={{display:"flex"}}>
      <div className="fott-1">
      <div>
        <img src="data:image/png;base64,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" alt="" className="fott-img"/>
      </div>
      <div className="foot-head"><h2 className="fott-head">Truetalent - India's first and only Recruitment as a Service (RaaS) employment platform.</h2></div>
      <div>
        <div>
          <h3 className="fott-contact">Contact</h3>
        </div>
        <div className="foot-add">
         <h4 className="fott-add"> #88 BoreWell Road,Whitefield, <br />Banglore,560066,Karnataka</h4>
        </div>
        <div>
         <h4 className="fott-num"> +9190906 90936 <br />
          maya@truetalent.io</h4>
        </div>
      </div>
      </div>
      <div className="fott-skill">
        <div><h2 className="fott-job-head">Jobs By Skills</h2></div>
        <div className="fot-jobs">SAP</div>
        <div className="fot-jobs">Java</div>
        <div className="fot-jobs">React</div>
        <div className="fot-jobs">Full Stack</div>
        <div className="fot-jobs">Sales</div>
        <div className="fot-jobs">HR</div>
      </div>
      <div className="fott-skill">
        <div><h2 className="fott-job-head">Jobs By Location</h2></div>
        <div className="fot-jobs">Banglore</div>
        <div className="fot-jobs">Chennai</div>
        <div className="fot-jobs">Hyderabad</div>
        <div className="fot-jobs">New Delhi</div>
        <div className="fot-jobs">Mumbai</div>
        <div className="fot-jobs">Pune</div>
      </div>
      <div className="fott-skill">
        <div>
          <h2 className="fott-job-head">Jobs By Industries</h2>
        </div>
        <div className="fot-jobs">Technology</div>
        <div className="fot-jobs">Engineering</div>
        <div className="fot-jobs">Hospitality</div>
        <div className="fot-jobs">Retail</div>
        <div className="fot-jobs">Healthcare</div>
        <div className="fot-jobs">Banking</div>
      </div>
      <div className="fott-skill">
        <div>
         <h2 className="fott-job-head">Navigate</h2>
        </div>
        <div className="fot-jobs"> <a href="/home"></a>Home</div>
        <div className="fot-jobs"> <a href="/aboutus" className="vlog">About Us </a></div>
        <div className="fot-jobs"> <link rel="stylesheet" href="/contactus"/> Contact Us </div>
        <div className="fot-jobs"> <a href="/giveaway"className="vlog" >Giveaway </a></div>
        <div className="fot-jobs"> <a href="blog/" className="vlog">Blog </a></div>
        <div className="fot-jobs">Terms of Use & Privacy Policy</div>
      </div>
      
    </footer>
    <div className="fott-main">
    <div>
        <h6 className="fott-bot">All rights reserved © 2023 FindrPro Technology Solutions Pvt. Ltd.</h6>
        <div></div>
      </div>
    </div>
    </div>

            
            </div>

     
     )
    
}


export default Navbar