import { useState,useEffect,createContext } from 'react'
import LogIn from './components/LogIn'
import './App.css'
// TODO: make all components arrow function
// TODO: please setup the prettier for the project
// TODO: make a context and have useAuth custom hook for it which will return a setAuthenticate and authenticate then use that one also when the app is loading the local storage should be checked there and set the value inside a useEffect
// TODO: what is merge and rebase / merge vs rebase
// TODO: Switch to reducer and create another context for login using reducer 
export const logInContext= createContext();
const App=()=> {
  const [isLogIn, setIsLogin] = useState( localStorage.getItem("isLogIn"));
  return (
  <>
  <logInContext.Provider value={{isLogIn,setIsLogin}}>
    {!isLogIn?<LogIn/>:"Welcome"}
  </logInContext.Provider>
  </>
  )
}

export default App
