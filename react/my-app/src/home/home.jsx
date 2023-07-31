
import React, { useEffect, useState } from 'react'
import { Homecompo } from '../compo/home'
// mongodb://127.0.0.1:27017/dummy
export const Home = () => {
    const [data,setData]=useState([])
    const fetchdata=()=>{
        
 fetch("http://localhost:8010/rout")
        .then((e)=>e.json())
        .then((e)=>setData(e))
        .catch((e)=>console.log(e))
        // console.log(d);
    }
    useEffect(()=>{
        fetchdata()
    },[])
    console.log(data)
  return (
    <div>
        {
            data.map((e)=><Homecompo {...e} />)
        }
    </div>
  )
}
