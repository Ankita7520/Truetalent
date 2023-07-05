import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const Forgot=()=>{
    let navigate=useNavigate();
    let backing=()=>{
        navigate("/Login")
    }
    return(
        <div>
            <div className="truu">
            <div>
            <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="can-img"/>
            </div>
            <div>
            <h1 className="dream-job"><span>Your Dream job </span> at best locations is just a <br></br> click away!</h1>
            </div>
            <div>
            <button className="more-about">Learn more about TrueTalent</button>
            </div>
            </div>
            <div>
                <div id="reset">
                    <h3>Reset Password</h3>
                    <div>
                    <input type="email" placeholder="Email ID" className="add"/>
                    <p className="link">Reset password link will be sent to this email address.</p>
                     <button className="send">send</button>
                     <p className="backk" onClick={backing}>Back to login</p>
                     <KeyboardReturnIcon className="keyboard"></KeyboardReturnIcon>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Forgot