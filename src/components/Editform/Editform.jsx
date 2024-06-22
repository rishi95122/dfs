import { useContext, useState } from 'react'
import { ImCross } from 'react-icons/im'

import { AuthContext } from '../../Context'
import './editform.css'
import axios from 'axios'

const Editform = ({click,setClick,item}) => {
    const {currentUser,getData}=useContext(AuthContext)

  const [name,setName]=useState(item.name)
  const [description,setDescription]=useState(item.description)
  const [date ,setDate]=useState(item.date)
 
  function handleClick(e){
    e.preventDefault()

    if(date.length<=0 || name.length<=0 )
        return;
      if(!currentUser)
        return;
    const newData={
      id:item.id,
      username:currentUser.username,
      name:name,
      description:description,
      date:date
    }
    axios.post(`http://localhost:8800/api/tasks/update`,newData).then(()=>{
      
        getData(currentUser.username)
  
      })
  }
  return (
    <div className='editform'>
      
    <form>
    
   
     <input type="text" value={name} placeholder='Task name' onChange={(e)=>setName(e.target.value)}/>
     <input type="text" value={description} placeholder='Task Description' onChange={(e)=>setDescription(e.target.value)}/> 
    
     <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
     <button className='addbtn' onClick={handleClick}>
     Submit
     </button>
  <button onClick={()=>{setClick(!click)}}>x</button>
     
    </form>
 </div>
  )
}

export default Editform