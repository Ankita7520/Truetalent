import React from "react";
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
import img14 from "./images/14.jpg"



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
                <button className="log" id="log">Login</button>
                <button className="log">Register</button>
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
            <div>
                <h3>Featured <span>Jobs</span> for you</h3>
            </div>
            <div>
                <div>
                    <img src={img14} alt="" />
                </div>
            </div>
        </div>
     </div>
     )
    
}


export default Navbar