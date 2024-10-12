import { useAuth } from "../App"
export const HomePage=()=>{
    const authenticate=useAuth()
    const handleLogOut=()=>{
        authenticate.setIsAuthenticated(false)
        localStorage.setItem("isLogIn",false)
    }
    return(
        <button onClick={handleLogOut}  className="logOutBtn">LogeOut</button>
    )
}