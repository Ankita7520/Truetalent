import React from "react";
import {AiOutlineEye} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
// import {CiFacebook,CiTwitter} from "react-icons/ci";
// import {AiOutlineLinkedin,AiOutlineYoutube,AiOutlineInstagram} from "react-icons/ai"

const Candidate=()=>{
    return(
        <div>
            <nav>
            <div className="nav-main">
            <div className="img-main">
                <img src="https://truetalent.io/static/media/logo.e8c72fdf.svg" alt="" className="img"/>
            </div>
            <div className="tt-main">
                <a href="" className="tt" id="tt1">Job</a>
                <a href="" className="tt">Gig</a>
            </div>
            <div className="bttn">
                <button className="log" id="log"><a href="/login">Login</a></button>
                <button className="log" id="rg"><a href="/register">Register</a></button>
            </div>
            </div>
        </nav>
        <div className="can-main">
            <div className="can-1">
                <div>
                    <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="can-img"/>
                </div>
                <div>
                    <h1 className="can-head">Amazing <span>career opportunities...</span> just a click<br></br>away!!</h1>
                </div>
                <div className="can-butt-div">
                    <button className="can-butt">Learn more about TrueTalent</button>
                </div>
            </div>
            <div className="can-2">
                <div>
                    <h1 className="can-head2">Create TrueTalent Account</h1>
                </div>
                <div style={{display:"flex"}} className="can-inp5">
                    <div>
                        <input type="text" placeholder="First Name" className="can-inp1"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" className="can-inp1"/>
                    </div>
                </div>
                <div>
                    <input type="email" placeholder="Email Address" className="can-inp2"/>
                </div>
                <div style={{display:"flex"}} className="can-div">
                    <div className="can-inp4">
                    <input type="password" placeholder="Password" className="can-inp3"/>
                    <AiOutlineEye></AiOutlineEye>
                    </div>
                    <div>
                        <input type="password" placeholder="Confirm Password" className="can-inp1" id="pw"/>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Referral Code" className="can-inp2"/>
                </div>
                <div className="can-check2">
                    <input type="checkbox" name="" id="boxy" />
                    <label htmlFor="" className="can-check">I accept the TrueTalent.io <span>Terms of use </span>& <span>Privacy Policy</span></label>
                </div>
                <div>
                    <button className="can-butt1">Create Account</button>
                </div>
                
                <div>
                    <button className="can-butt2"><FcGoogle/>Continue With Google</button>
                </div>
            </div>
        </div>
        <div>
        {/* <div className="foot-main">
                <footer>
                   <div className="foot-first">
                   <a href="" className="foot-1">Home</a>
                        <a href="/Aboutus" className="foot-1">About Us</a>
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

            </div> */}
        </div>

        </div>
    )
}

export default Candidate