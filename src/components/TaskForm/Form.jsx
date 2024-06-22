import { useContext, useState } from 'react'
import "./form.css"
import { AuthContext } from '../../Context';
import axios from 'axios';

const Form = ({click,setClick}) => {
const {currentUser,getData}=useContext(AuthContext)
  const [name,setName]=useState("")
  const [description,setDescription]=useState("")

  const [date ,setDate]=useState("")

  function handleClick(){

      if(date.length<=0 || name.length<=0 )
        return;
      if(!currentUser)
        return;
   
    const newData={
      id:new Date().getTime()*9,
      username:currentUser.username,
      name:name,
      description:description,
      date:date
    }
     axios.post(`${import.meta.env.VITE_BACK_API}/api/tasks/add`,newData).then(()=>{
      
      getData(currentUser.username)
      setName("")
     setDescription("")
      setDate("")
  
      setClick(false)
    })
 
  }

  return (
    <div className='taskform'>
      
       <form>
        <div className='cross'>
          <p></p>
        <h3>Enter Details</h3>
        <div onClick={()=>setClick(!click)}>
        x
        </div>
       
        </div>
      
        <input type="text" value={name} placeholder='Task name' onChange={(e)=>setName(e.target.value)}/>
        <textarea type="text" value={description} placeholder='Task Description' onChange={(e)=>setDescription(e.target.value)}/> 
       
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
        <div className='addbtn' onClick={handleClick}>
        Add
        </div>
     
        
       </form>
    </div>
  )
}

export default Form