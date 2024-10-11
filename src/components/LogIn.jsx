import { useContext } from "react"
import { logInContext } from "../App"
const LogIn =()=>{
    const logIn=useContext(logInContext)
    let userName
    let userPass
    
    const handleChangeName=(e)=>{
      userName=e.target.value
    }
    const handleChangePass=(e)=>{
      userPass=e.target.value
    }
    const handleLogeIn=()=>{
  
      if(userName==="admin" && userPass==="admin"){
        logIn.setIsLogin(true)
        localStorage.setItem("isLogIn",true)  
        
      }

      else{
        logIn.setIsLogin(false)
        localStorage.setItem("isLogIn",false)
        alert('userName or passWorld is incorrect! ')
      }
      
     
    }
    return( 
        <> 
        <div className="container">
            <h1>logIn</h1>
            <p>userName</p>
            <input onChange={handleChangeName} type="text" placeholder="UserName"/>
            <p>password</p>
            <input onChange={handleChangePass} type="password"  placeholder="password"/>
            <button onClick={handleLogeIn}>LogIn</button>
        </div>
        </> 
    )
}
export default LogIn;