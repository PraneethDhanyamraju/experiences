import axios from "axios";
import react, { useState } from "react";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Experiences()
{
    const[data,setData]=useState( {
        title:"",
        date:"",
        source:"",
        destination:"",
        number:"",
        cost:"",
        itenary:"",
        experience:"",
        suggestions:""
        })
       
    const handleSubmit=()=>{
        if(data.title=="")
        {
            toast("Enter the title of the trip")
        }
        
        else if(data.source=="")
        {
            toast("Enter the source of the trip")
        }

       else if(data.destination=="")
        {
            toast("Enter the destination of the trip")
        }
       else if(data.date=="")
        {
            toast("Enter the date of the trip")
        }
       else if(data.number=="")
        {
            toast("Enter number of days in the trip")
        }
        else if(data.cost=="")
        {
            toast("Enter the amount spent in your trip")
        }
        else if(data.itenary=="")
        {
            toast("Enter the itenary of the trip")
        }
        else if(data.experience=="")
            toast("Enter the experience of the trip")
        else if(data.suggestions=="")
            toast("Enter number of days in the trip")
        else{
        axios.post(`${process.env.REACT_APP_BASE_URL}/experience`,{
        title:data.title,
        date:data.date,
        source:data.source,
        destination:data.destination,
        number:data.number,
        cost:data.cost,
        itenary:data.itenary,
        experience:data.experience,
        suggestions:data.suggestions
    }
    )
    
    window.location.href="/experiences"
    
}

    }
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData((prev)=>{
            return{...prev,[name]:value}
        })
    }
  
    return  <div class="vertical">
             <Navbar/>
               
                <div class="experience">
                   
                <i class="fa-solid fa-feather-pointed" style={{fontSize:"30px",alignSelf:"center"}} onChange={handleChange}> Write Your Experience !</i>
                    <input type="text" name="title" placeholder="Title" onChange={handleChange} />
                    <input type="text"  name="source" placeholder="Source" onChange={handleChange}/>
                    <input type="text" name="destination"  placeholder="Destination" onChange={handleChange}/>
                    <input type="text" name="date" placeholder="Date" onChange={handleChange}/>
                    <input type="text"  name="number" placeholder="Number Of Days" onChange={handleChange}/>
                    <input type="text"  name="cost" placeholder="Cost" onChange={handleChange}/>
                    <textarea name="itenary" placeholder="Itenary"onChange={handleChange}/>
                    <textarea name="experience" placeholder="Experiences" onChange={handleChange}/>
                    <textarea name="suggestions" placeholder="Suggestions" onChange={handleChange}/>
                    <button onClick={handleSubmit}><i id="btn-icon" class="fa-solid fa-feather-pointed"onChange={handleChange}/> </button>
                  
                </div>
                <ToastContainer/>
    </div>
}