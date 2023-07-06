import React from "react";
import {AiOutlineEye} from "react-icons/ai";

const Employer=()=>{
  
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
        <div className="emp-main">
       <div className="emp-1">
        <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="emp-img"/>
        <div>
          <h1 className="emp-head"><span>Discover curated geniuses </span>for your hiring <br />needs!!</h1>
        </div>
        <div>
          <button className="emp-butt">Learn more about TrueTalent</button>
        </div>
       </div>
       <div className="emp-2">
         <div className="emp-2.1">
          <div className="emp-div-head">
            <h1 className="emp-head1">Create TrueTalent Account</h1>
          </div>
          <div style={{display:"flex"}}>
            <div className="fs">
              <input type="text" placeholder="First Name" className="emp-inp1"/>
            </div>
            <div>
              <input type="text" placeholder="Last Name" className="emp-inp1"/>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Business Email Address" className="emp-inp2"/>
          </div>
          <div>
          <input type="number" placeholder="Phone number" className="emp-inp2"/>
          </div>
          <div style={{display:"flex"}} className="emp-div-main">
            <div className="emp-div">
              <input type="password" placeholder="Password" className="emp-inp3"/>
              <AiOutlineEye></AiOutlineEye>
            </div>
            <div>
              <input type="password" placeholder="Confirm Password" className="emp-inp1"/>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Referral Code" className="emp-inp2"/>
          </div>
         </div>
         <div className="emp-2.2">
            <div className="emp-div-head">
              <h1 className="emp-head1">Company Details</h1>
            </div>
            <div className="company-details">
            <div>
              <input type="text" placeholder="Company Name" className="emp-inp2"/>
            </div>
            <div style={{display:"flex"}} className="emp-div-main">
              <div>
                <input type="text" placeholder="Website" className="emp-inp1"/>
              </div>
              <div>
                <input type="text" placeholder="Location" className="emp-inp1"/>
              </div>
            </div>
            <div style={{display:"flex"}} className="emp-div-main">
              <div className="emp-div1">
                <select name="" id="" placeholder="Company Size" className="emp-inp5">
                  <option value="">Select company size</option>
                  <option value="">1-49</option>
                  <option value="">50-199</option>
                  <option value="">200-999</option>
                  <option value="">1000-4999</option>
                  <option value="">5000-above</option>
                </select>
              </div>
              <div>
                <select name="" id="emp-inp1" className="emp-inp1">
                  <option value="">Select industry domain</option>
                  <option value="">Aerospace</option>
                  <option value="">Automotive</option>
                  <option value="">Banking</option>
                  <option value="">BFSI</option>
                  <option value="">Chemical</option>
                  <option value="">Consumer/FMCG</option>
                  <option value="">Education</option>
                  <option value="">Energy</option>
                  <option value="">Enigneering and Construction</option>
                  <option value="">Finace</option>
                  <option value="">Healthcare</option>
                  <option value="">Hospital</option>
                  <option value="">Insurance</option>
                  <option value="">Logistics</option>
                  <option value="">Real Estate</option>
                  <option value="">Recruitment</option>
                  <option value="">Retail</option>
                  <option value="">Technology</option>
                  <option value="">Telecom</option>
                  <option value="">Travel</option>
                </select>
              </div>
            </div>
            <div className="emp-div-check">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="emp-check">I accept the TrueTalent.io <span>Terms of use </span>& <span>Privacy Policy</span></label>
            </div>
            <div className="emp-div-butt">
              <button className="emp-butt1">Create Account</button>
              </div>
            </div>
         </div>
       </div>
    </div>
        </div>
    )
}
export default Employer