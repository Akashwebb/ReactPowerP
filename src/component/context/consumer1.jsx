import React, { useContext } from "react";
import { Create } from "./create";
import { Link } from "react-router-dom";
const Consumer1=()=>{

     const value1= useContext(Create)
     
     console.log("valll-1111111111",value1)   // it gives object inside we have {name and setname(function to update name) }


     const handleName=(e)=>{
        value1.setname(e.target.value)   // setting global value for "name" which is extracted in "consumer2" component 
        console.log(value1.name)
     }
     const handleAge=(e)=>{
        value1.setage(e.target.value)
     }
    return(
        <>
           <h1>hello Consumer11111   </h1>
            Name : <input type="text" onChange={(e)=>{handleName(e)}} />
            Age :  <input type="text" onChange={(e)=>{handleAge(e)}} /> 
            <Link to="/consumer2"> consumer2 </Link>
        </>
    )
}
export default Consumer1