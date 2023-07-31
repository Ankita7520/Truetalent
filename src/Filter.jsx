import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {SlMagnifier,SlLocationPin} from "react-icons/sl";
// import Valid from "./Validation";
// import Log from "./Log";
import Box from "./Box";
import Table from "./Table"

const Filter=()=>{
  let navigate=useNavigate()

  const [table , settable] = useState(true)



  let tablehandler=()=>{
    settable(false)

  }
  let boxhandler=()=>{
    settable(true)
  }
  let logg=()=>{
    navigate("/Form")
}
    return(
        <div>
            <div >
              <div><button onClick={logg}>CLICK
                </button></div>
      <div className="sec-1">
        <div className="sec-div-1" id="sec-div-1">
        <SlMagnifier></SlMagnifier>
          <input type="text" placeholder="Skills" className="sec-inp1"/>
        </div>
        <div className="sec-div-1">
        <SlLocationPin></SlLocationPin>
          <input type="text" placeholder="City" className="sec-inp1"/>
          <button className="sec-butt">Find Jobs</button>
        </div>
      </div>
      <div className="sec-2" style={{display:"flex"}}>
      <div className="sec-2-0" style={{fontFamily:"system-ui,sans-serif"}} >
          <div className="sec-div1" >
             <h3 className="filter-search">Filter Search</h3>
             <button className="sec-clear">Clear All</button>
          </div>
          <div>
            <p>Location</p>
          </div>
          <div className="sec-filter">
                    <input type="text" placeholder="city" className="sec-inp2"/><br></br>
                    <div className="sec-one">
                    <input type="checkbox" className="sec-cba" id="city1"/><label htmlFor="city1">Chennai,TamilNadu</label><br></br>
                    <input type="checkbox" className="sec-cba" id="city2"/><label htmlFor="city2">Mumbai,Mumbai</label><br></br>
                    <input type="checkbox" className="sec-cba" id="city3"/><label htmlFor="city3">Banglore,Karnataka</label><br></br>
                    <input type="checkbox" className="sec-cba" id="city4"/><label htmlFor="city4">Kolkata,West Bengal</label><br></br>
                    <input type="checkbox" className="sec-cba" id="city5"/><label htmlFor="city5">Bhubaneswar,Odisha</label><br></br>
                    <input type="checkbox" className="sec-cba" id="city6"/><label htmlFor="city6">New Delhi,Delhi</label><br></br>
                    <input type="checkbox" className="sec-cba" id="city7"/><label htmlFor="city7">Pune,Maharastra</label><br></br>
                    <input type="checkbox" className="sec-cba" id="city8"/><label htmlFor="city8">Indore,Madhaya Pradhesh</label><br></br>
                    <input type="checkbox" className="sec-cba" id="city9"/><label htmlFor="city9">Ahamadabad,Gujarat</label><br></br>
                    <h6 className="dca">+7154More</h6>
                    </div>

                </div>
                <div>
                <div>
                    <p>Salary</p>
                    <input type="checkbox" className="cba" id="sal1"/><label htmlFor="sal1">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal2"/><label htmlFor="sal2">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal3"/><label htmlFor="sal3">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal4"/><label htmlFor="sal4">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal5"/><label htmlFor="sal5">Rs 2Lac - 5Lac</label><br></br>
                </div>
                <div>
                    <p>Preferred Job Type</p>
                    <input type="checkbox" className="cba" id="pjt1"/><label htmlFor="pjt1">Full Time</label><br></br>
                    <input type="checkbox" className="cba" id="pjt2"/><label htmlFor="pjt2">Direct Contract</label><br></br>
                    <input type="checkbox" className="cba" id="pjt3"/><label htmlFor="pjt3">Contract-to-Hire</label><br></br>

                </div>
                <div>
                    <p>Joining Preferences</p>
                    <input type="checkbox" className="cba" id="jp1"/><label htmlFor="jp1">Immediate</label><br></br>
                    <input type="checkbox" className="cba" id="jp2"/><label htmlFor="jp2">2 Weeks</label><br></br>
                    <input type="checkbox" className="cba" id="jp3"/><label htmlFor="jp3">1 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jp4"/><label htmlFor="jp4">2 Months</label><br></br>
                </div>
                <div>
                    <p>Work Authorization</p>
                    <input type="checkbox" className="cba" id="wa1"/><label htmlFor="wa1">Required</label><br></br>
                    <input type="checkbox" className="cba" id="wa2"/><label htmlFor="wa2">Not Required</label><br></br>
                </div>
                <div>
                    <p>Job Durations</p>
                    <input type="checkbox" className="cba" id="jd1"/><label htmlFor="jd1">Contract-3 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jd2"/><label htmlFor="jd2">Contract-6 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jd3"/><label htmlFor="jd3">Contract-1 Year</label><br></br>
                    <input type="checkbox" className="cba" id="jd4"/><label htmlFor="jd4">Permanent</label><br></br>
                </div>
                <div>
                    <p>Salary Types</p>
                    <input type="checkbox" className="cba" id="st1"/><label htmlFor="st1">Annual</label><br></br>
                    <input type="checkbox" className="cba" id="st2"/><label htmlFor="st2">Monthly</label><br></br>
                </div>
                <div>
                    <p>Industry Domains</p>
                    <input type="text" placeholder="Entry Industry Domain" className="sec-inp2"/><br />
                    <input type="checkbox" className="cba" id="id1"/><label htmlFor="id1">Technology</label><br></br>
                    <input type="checkbox" className="cba" id="id2"/><label htmlFor="id2">Education</label><br></br>
                    <input type="checkbox" className="cba" id="id3"/><label htmlFor="id3">Hospitality</label><br></br>
                    <input type="checkbox" className="cba" id="id4"/><label htmlFor="id4">Healthcare</label><br></br>
                    <input type="checkbox" className="cba" id="id5"/><label htmlFor="id5">Engineering and Construction</label><br></br>
                    <input type="checkbox" className="cba" id="id6"/><label htmlFor="id6">Banking</label><br></br>
                    <input type="checkbox" className="cba" id="id7"/><label htmlFor="id7">Finance</label><br></br>
                    <input type="checkbox" className="cba" id="id8"/><label htmlFor="id8">Automotive</label><br></br>
                    <input type="checkbox" className="cba" id="id9"/><label htmlFor="id9">Telecom</label><br></br>
                    <input type="checkbox" className="cba" id="id10"/><label htmlFor="id10">Chemical</label><br></br>
                    <h6 className="dca">+13More</h6>
                </div>
                </div>
        </div>
        <div className="sec-2-2">
          <div style={{display:"flex"}}>
          <div>
          <h3 className="search-res">Search results</h3>
          </div>
          <div className="sec-tab">
           <h4 className="sortt"> Sort by: Newest First</h4>
           <div style={{display:"flex"}} className="sec-img-div">
           <img src="https://truetalent.io/Assets/svgs/list_view_icon.svg" alt="" className="sec-img1" onClick={boxhandler}/>
           <img src="https://truetalent.io/Assets/svgs/grid_view_icon.svg" alt="" className="sec-img2" onClick={tablehandler}/>
           </div>
          </div>
          </div>
          <div>
              {
               table?<Box></Box>:<Table></Table>
              }
          </div>
        </div>
        
      </div>
    </div>
        </div>
    )
}
export default Filter