/* eslint-disable no-undef */

import axios from "axios"
import "./login.css"
import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from "react-router"
import { AuthContext } from "../../Context"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setCurrentUser,getData}=useContext(AuthContext)
const navigate=useNavigate()


  const handleclick = () => {

   

    axios.post(`http://localhost:8800/api/auth/login`,{
      email:email,
      password:password
    }).then((data)=>{
      localStorage.setItem("userdata",JSON.stringify(data.data))
      setCurrentUser(data.data)
      getData(data.data.username)
      navigate("/")
    })
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
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
        <input className={'inputButton'} type="button" onClick={handleclick} value={'Log in'} />
      </div>
    
    </div>
  )
}

export default Login