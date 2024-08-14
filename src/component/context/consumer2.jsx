import React, { useContext } from "react";
import { Create } from "./create";
import { Link } from "react-router-dom";
const Consumer2=()=>{

     const value2= useContext(Create)
     
     console.log("valll222222222",value2)
    return(
        <> 
           <h1>hello Consumer22222 Name is ::  {value2.name}  and  Age is :: {value2.age}  </h1>
             <Link to="/consumer1" style={{TextDecoration:"no"}} > consumer1 </Link>
        </>
    )
}
export default Consumer2