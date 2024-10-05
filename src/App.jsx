import { useState,useEffect } from 'react'
import LogIn from './components/LogIn'
import './App.css'
// TODO: make all components arrow function
// TODO: please setup the prettier for the project
// TODO: make a context and have useAuth custom hook for it which will return a setAuthenticate and authenticate then use that one also when the app is loading the local storage should be checked there and set the value inside a useEffect

function App() {
  const [isLogIn,setIsLogin]=useState(localStorage.getItem("isLogIn"));


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
