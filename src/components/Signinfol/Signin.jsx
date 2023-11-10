import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin=()=>{
   const navigate=useNavigate();
    return(
        <>
     
        <h1>Login page</h1>
        UserName:  <input type="text" />
        Password: <input type="password" />
        <button onClick={()=>navigate("firstlist")}>Login</button>
        </>
       
        
    )
}
export default Signin;