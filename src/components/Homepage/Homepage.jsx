import  { useContext, useState } from 'react'
import "./Homepage.css"


import Todos from '../Todos/Todos';
import Form from '../Form/Form';


const Homepage = () => {
  function handleClick(){
    setClick(!click)

  }

  return (
    <div className='homepage'>
    
  <h1>Task Manager</h1>

 
  <div className='addnewtask'>
  <button onClick={handleClick}>Add new Task</button>
  
   
    <div className='form'>
   <Form  />
 
  </div>
      </div>
        <div >
      <Todos />
        </div>
    </div>
  )
}

export default Homepage