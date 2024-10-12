import { useState,useEffect,createContext,useContext } from 'react'
import LogIn from './components/LogIn'
import './App.css'
// TODO: make all components arrow function
// TODO: please setup the prettier for the project
// TODO: make a context and have useAuth custom hook for it which will return a setAuthenticate and authenticate then use that one also when the app is loading the local storage should be checked there and set the value inside a useEffect
<<<<<<< HEAD
// TODO: what is merge and rebase / merge vs rebase
// TODO: Switch to reducer and create another context for login using reducer 
export const authenticatedContext= createContext();
export const useAuth=()=>{
    const authenticate=useContext(authenticatedContext);
    if(authenticate===undefined){
        throw new Error("useAuth must be used with a authenticated")
=======

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
      
>>>>>>> 93785af2529169079dc60b8a65eb516d626a00e3
    }
    return authenticate;
}

const App=()=> {
  const [isAuthenticated, setIsAuthenticated] = useState( localStorage.getItem("isLogIn"));
  return (
  <>
  <authenticatedContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
    {!isAuthenticated?<LogIn/>:"you are logIn"}
  </authenticatedContext.Provider>
  </>
  )
}

export default App
