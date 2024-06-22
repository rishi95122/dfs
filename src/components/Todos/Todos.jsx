import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context'
import './todos.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import Editform from '../Editform/Editform';
const Todos = () => {
    const {todosData,currentUser,getData}=useContext(AuthContext) 
    const [click,setClick]=useState(false)
   const [formid,setFormid]=useState()
  
    function handleClick(id){
        console.log(id)
        
        axios.post(`http://localhost:8800/api/tasks/delete`,{
          username:currentUser.username,
          id:id
        }).then(()=>{
         getData(currentUser.username)
        
      
        })
      }
      function handleEdit(id){

setClick(!click)
setFormid(id)
      }

  return (
    <div>
        <h2>Tasks</h2>
        <div className='todos'>
                {
                  todosData.map((item)=>{
                        return <div key={item.id} className='parent-todo'>
                            <div  className='todo'>
                                                            
                                <p>{item.name}</p>
                              
                                <p>{item.description}</p>
                                <p>{item.date}</p>
                                
                                <div className='btn'>
                                  <div onClick={()=>handleEdit(item.id)}>
<MdEdit />
                                    </div>
                             
                                <div onClick={()=>handleClick(item.id)}>

                                <MdDelete />
                                </div>
                                </div>
                                    </div>
                                    { click && formid===item.id && <Editform item={item } setClick={setClick}  click={click} />}
                        </div>
                    })
                }
        </div>
    </div>
  )
}

export default Todos