import axios from "axios";
import react, { useState } from "react";
import { useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Update()
{ const { id } = useParams();


const[updateData,setUpdateData]=useState({
    title:"",
    date:"",
    source:"",
    destination:"",
    number:"",
    cost:"",
    itenary:"",
    experience:"",
    suggestions:""
    });

    useState(()=>{
            axios.get(`${process.env.REACT_APP_BASE_URL}/experience/${id}`).then((response)=>{
            setUpdateData(response.data)
            }).catch()
    },[updateData])
    
const handleSubmit=()=>{
    if(updateData.title=="")
    {
        toast("Enter the title of the trip")
    }
    
   else if(updateData.source=="")
    {
        toast("Enter the source of the trip")
    }

   else if(updateData.destination=="")
    {
        toast("Enter the destination of the trip")
    }
    else if(updateData.date=="")
    {
        toast("Enter the date of the trip")
    }
    else if(updateData.number=="")
    {
        toast("Enter number of days in the trip")
    }
   else if(updateData.cost=="")
    {
        toast("Enter the amount spent in your trip")
    }
    else if(updateData.itenary=="")
    {
        toast("Enter the itenary of the trip")
    }
    else if(updateData.experience=="")
        toast("Enter the experience of the trip")
    else if(updateData.suggestions=="")
        toast("Enter suggestions of days in the trip")
        
        else {
   axios.patch(`${process.env.REACT_APP_BASE_URL}/experience/${id}`,{
    
        title:updateData.title,
        date:updateData.date,
        source:updateData.source,
        destination:updateData.destination,
        number:updateData.number,
        cost:updateData.cost,
        itenary:updateData.itenary,
        experience:updateData.experience,
        suggestions:updateData.suggestions
        
   }).then(()=>{ window.location.href="/experiences"})
  
} 


}
const handleChange=(event)=>{
    const name=event.target.name;

    const value=event.target.value;
    setUpdateData((prev)=>{
        return{...prev,[name]:value}
    })
}

return  <div class="vertical">
             <Navbar/>
           
            <div class="experience">
           
            <i class="fa-solid fa-feather-pointed"  style={{fontSize:"30px",alignSelf:"center"}} onChange={handleChange}> Write Your Experience !</i>
                <input  type="text" defaultValue={updateData.title} name="title" placeholder="Title" onChange={handleChange} />
                <input type="text"  defaultValue={updateData.source}name="source" placeholder="Source" onChange={handleChange}/>
                <input type="text" defaultValue={updateData.destination}name="destination"  placeholder="Destination" onChange={handleChange}/>
                <input type="text"defaultValue={updateData.date} name="date" placeholder="Date" onChange={handleChange}/>
                <input type="text" defaultValue={updateData.number} name="number" placeholder="Number Of Days" onChange={handleChange}/>
                <input type="text" defaultValue={updateData.cost}  name="cost" placeholder="Cost" onChange={handleChange}/>
                <textarea name="itenary"  defaultValue={updateData.itenary}placeholder="Itenary"onChange={handleChange}/>
                <textarea name="experience" defaultValue={updateData.experience} placeholder="Experiences" onChange={handleChange}/>
                <textarea name="suggestions" defaultValue={updateData.suggestions} placeholder="Suggestions" onChange={handleChange}/>
                <button onClick={handleSubmit}><i id="btn-icon" class="fa-solid fa-pen-to-square" onChange={handleChange}/> </button>
              
            </div>
            <ToastContainer/>
</div>

   }