import React, { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Card()
{
  
    const[item,setItem]=useState([]);
    const[err,setErr]=useState(false);
   
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/experience`).then((response)=>{
         setItem(response.data)
           
        }).catch((response)=>{
       
        })
    },[])
    
return(
<div class="vertical">
    <Navbar/>
    <div class="card-container">

    {item.length>0?item.map( (response)=>(
        <div class="experience-card" id={response.id}>
        <div class="card" >
                <h1>{response.title}</h1>
                <h2>{response.source} --- {response.destination}</h2>
                
                <h3>{response.date}</h3>
                <h3>{response.cost}</h3>
                <h3>{response.number} days</h3>
                <h4>{response.itenary}</h4>
                <h4>{response.experience}</h4>
                <h4>{response.suggestions}</h4>
               
        </div>
        <div class="btn-container">
        <i onClick={()=>{
            axios.delete(`${process.env.REACT_APP_BASE_URL}/experience/${response.id}`).then((response)=>{
                axios.get(`${process.env.REACT_APP_BASE_URL}/experience`).then((response)=>{
                    setItem(response.data)
                      toast("Item Deleted Sucessfully")
                   }).catch((response)=>{
                  
                   })
        }).catch((err)=>{
            })
           
        }} className="fa-solid fa-trash"></i>
        <i  onClick={()=>{
            window.location.href=`experiences/${response.id}`;
            }}
            
        class="fa-solid fa-pen-to-square"  style={{"marginLeft":"auto"}} >
        </i>
        </div>
        </div>

)):<h1>No Experiences Found Write e'm</h1>
}
        </div>     
        <ToastContainer/> 
        </div>
  
    );
}