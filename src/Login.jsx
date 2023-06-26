// import { floatButtonPrefixCls } from "antd/es/float-button/FloatButton";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"
import {AiOutlineMail} from "react-icons/ai"
import {FiLock,FiEye} from "react-icons/fi"


const Login =()=>{
    let[pass,setpassword]=useState(true)
    let password=()=>{
        setpassword(!pass)
    }
    return(
        <div style={{display:"flex"}}>
            <div className="reg">
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
                      
                        <input type="email" placeholder="Email" className="email" /><br></br>
                        </div>
                        <div className="ic-fi">
                        <FiLock className="fl"></FiLock>
                        <input type={pass?"text": "password"}  placeholder="Password" className="password"/>
                        <FiEye id="ic-ai" onClick={password}></FiEye>
                        </div>
                        <div style={{display:"flex"}}>
                        <input type="checkbox" className="RM"/> <label htmlFor="" id="MR">Remember Me</label><br></br>
                        <h5 className="fg">Forgot Password?</h5>
                        </div>
                    </div>
                    <div>
                        <button className="SI">Sign in</button><br></br>
                        <h5 className="or"> ____________________________OR________________________________</h5>
                        <button className="google">
                            <FcGoogle className="gg"></FcGoogle>Continue with Google</button>
                        <h4 className="JS">(For Job seekers only)</h4>
                    </div>
                </div>

        </div>
    )
}
export default Login