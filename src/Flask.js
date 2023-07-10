import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

function Fetch(){
    const [data , setData] = useState(null);

    useEffect(()=>{
        const getData = async () =>{
            try {
                const response = await fetchData();
                setData(response);
                console.log(response);
            } catch (error) {
                console.log('Error', error);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h1>React + Python</h1>
            {data && <p>{data.message}</p>}
        </div>
    );
}

export default Fetch