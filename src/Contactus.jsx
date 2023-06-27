import React from "react";
import {SlLocationPin} from "react-icons/sl";
import {FaPhoneAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"

const Contactus=()=>{
    return(
        <div>
            <nav>
            <div className="nav-main">
            <div className="img-main">
                <img src="https://truetalent.io/static/media/logo.e8c72fdf.svg" alt="" className="img" id="mage"/>
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
        <div className="con-main">
      <div className="con-1">
        <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="con-img"/>
        <div>
          <h1 className="con-head">We are listening</h1>
          <p className="con-txt">Write us in case you wish you share feedbacks, suggestions or wish to add value <br /> to the project “TrueTalent”.</p>
        </div>
        <div className="icon">
          <div className="mail">
            <div className="mail-ic "><AiOutlineMail/></div>
            <div>maya@truetalent.io</div>
          </div>
          <div className="phone">
            <div className="phone-ic"><FaPhoneAlt/></div>
            <div className="numberr">+919090690936</div>
          </div>
          <div className="loc">
            <div className="loc-ic"><SlLocationPin/></div>
         <div className="borewell"> #88 Borewell Road, Whitefield, Bangalore, 560066, Karnataka</div>
          </div>
        </div>
        </div>
        <div className="con-2">
          <div className="con-2-body">
              <h1 className="con-2-head">Send us a message</h1>
              <div>
              <label htmlFor="">First & Last Name*</label><br />
                <input type="text" className="con-inp1"/>
                
              </div>
              <div style={{display:"flex"}}  className="con-div1">
                <div>
              <label htmlFor="">Phone Number</label><br />
                <input type="number" className="con-inp2"/>
                </div>
                <div className="con-inp">
                <label htmlFor="">Email address*</label><br /> 
                <input type="email" className="con-inp3"/>
                </div>
              </div>
              <div className="con-div2">
                <label htmlFor="">Company name(optional)</label><br />
                <input type="text" className="con-inp1"/>
              </div>
              <div className="con-div3">
                <label htmlFor="">Message*</label><br />
                <textarea name="" id="" cols="58" rows="6" placeholder="Your message here..." className="con-inp4"></textarea>
              </div>
              <div className="con-div4">
                <h3 className="con-field">*Field required</h3>
              </div>
              <div>
                <button className="con-butt">Contact us now!</button>
              </div>
              </div>
        </div>
    </div>
        </div>
    )
}
export default Contactus