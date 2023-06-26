import React,{useState,useEffect} from "react";

function Flask(){
    const [data,setdata]=useState([{}])

    useEffect(()=>{
        fetch("/members").then(
            res =>res.json()
        ).then(
            data =>{
                setdata(data)
                console.log(data);
            }
        )
    },[])
    return (
        <div>
           <h1>Flask succes</h1>
        </div>
    )
}

export default Flask