import { useState } from 'react'
import LogIn from './components/LogIn'
import './App.css'

function App() {
const[isLogIn,setIsLogIn]=useState(false);
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
      setIsLogIn(true)
    }
    else{
      setIsLogIn(false)
    }
  }
  return (
  <>
    {!isLogIn?<LogIn onChangeName ={handleChangeName} onChangePass={handleChangePass}  logInOnClick={handleLogeIn}/>:"Welcome"}
  </>
  )
}

export default App
