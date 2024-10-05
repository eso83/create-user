const LogIn =({onChangeName,onChangePass,logInOnClick})=>{
    return( 
        <> 
        <div className="container">
            <h1>logIn</h1>
            <p>userName</p>
            <input onChange={onChangeName} type="text" placeholder="UserName"/>
            <p>password</p>
            <input onChange={onChangePass} type="password"  placeholder="password"/>
            <button onClick={logInOnClick}>LogIn</button>
        </div>
        </> 
    )
}
export default LogIn;