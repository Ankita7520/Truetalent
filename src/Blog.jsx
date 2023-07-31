import React from "react";
import img15 from "./images/15.png"
import img17 from "./images/img17.png"
import img16 from "./images/img16.png"
import img18 from "./images/18.png"
import {FaBolt} from "react-icons/fa";


const Blog=()=>{
    return(
        <div className="up">
            <div  className="update">
             
            <button className="dates"> <FaBolt></FaBolt>  updates</button>
            {/* <FaBolt className="fabolt"></FaBolt>  */}
            
            
            
            {/* <div className="marque"> */}
            <div className="content">
            <marquee width="120%" direction="left" scrollamount="20" height="100px">How to get a 6-figure Salary as a Fresher?     Tips to negotiate the best salary offer  How to earn good money using your skills and be your own boss! How to get a 6-figure Salary as a Fresher? 

</marquee>
{/* </div> */}
</div>
</div> 
<div className="blog-full">
<div className="blog">
<div className="blog-1">
<div>
    <img src={img15} alt="" className="fst-img"></img>
    <button className="interview1">INTERVIEW</button>
</div>
{/* <h4 className="good-money">How to earn good money using your
skills and be your own boss!</h4> */}
        </div>
        <div className="blog-2">
<div>
    <img src={img16} alt=""className="fst-img2" id="img3"></img>
    <button className="interview2">INTERVIEW</button>
</div>
{/* <h4 className="good-moneyyy">How to earn good money using your
skills <br /> and be your own boss!</h4> */}
        </div>
      
        </div>
        <div className="blog-main">
        <div className="blog-3">
<div>
    <img src={img17} alt=""className="fst-img2" id="img2"></img>
    <button className="interview3">INTERVIEW</button>
</div>
</div>

        </div>

   <div className="blog-4">
<div>
    <img src={img18} alt=""className="fst-img2"></img>
    <button className="interview4">INTERVIEW</button>
</div>
</div>
</div>
   <div className="missed">
    <div className="heading" >
        <h3>You May Have Missed</h3>
    </div>
    <div className="you-may">
    <img src={img18} alt="" className="img9"></img> 
    <img src={img17} alt="" className="img10"></img>
    <img src={img16} alt="" className="img11" ></img>
    </div>


   </div>

        </div>
    )
}
export default Blog