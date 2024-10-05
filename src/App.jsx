import { useState,useEffect } from 'react'
import LogIn from './components/LogIn'
import './App.css'

function App() {
  const [isLogIn,setIsLogin]=useState(localStorage.getItem("isLogIn"))

  let userName
  let userPass
  const handleChangeName=(e)=>{
    userName=e.target.value
  }
  const handleChangePass=(e)=>{
    userPass=e.target.value
  }
  const handleLogeIn=()=>{

    if (userName==="admin"&& userPass==="admin"){
      setIsLogin(true)
      localStorage.setItem("isLogIn",true)  
      
    }
    else{
      setIsLogin(false)
      localStorage.setItem("isLogIn",false)
    }
    
   
  }
  
  return (
  <>
    {!isLogIn?<LogIn onChangeName ={handleChangeName} onChangePass={handleChangePass}  logInOnClick={handleLogeIn}/>:"Welcome"}
  </>
  )
}

export default App
