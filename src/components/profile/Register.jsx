
import "./login.css"
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router"



const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  const navigate=useNavigate()


  const handleclick = () => {
   axios.post(`http://localhost:8800/api/auth/register`,{
    email:email.toLowerCase(),
    username:username.toLowerCase().trim(),
    password:password
  }).then(()=>{
    navigate("/login")

  })
  
  }

  return (
    <div className={'mainContainer'}>
    <div className={'titleContainer'}>
      <div>Signup</div>
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        value={email}
        placeholder="Enter your email here"
        onChange={(ev) => setEmail(ev.target.value)}
        className={'inputBox'}
      />
    
    </div>
    <br></br>
    <div className={'inputContainer'}>
      <input
        value={username}
        placeholder="Enter your Username here"
        onChange={(ev) => setUsername(ev.target.value)}
        className={'inputBox'}
      />
  
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        value={password}
        placeholder="Enter your password here"
        onChange={(ev) => setPassword(ev.target.value)}
        className={'inputBox'}
      />
   
    </div>
 
    <br />
     

    <div className={'inputContainer'}>
      <input className={'inputButton'} type="button" onClick={handleclick} value={'Register'} />
    </div>
    
  </div>
  )
}

export default Register