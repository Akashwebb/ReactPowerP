import React from "react";
import { Create } from "./create";
import { useState } from "react";

const Providers=(props)=>{
     const [name,setname]=useState("")    // creating context useState used in Consumer1 for Form
     const [age,setage]=useState("")
    return(
        <Create.Provider value={{name,setname,age,setage}}>   
                             {/* exporting name and function to consumer 1 to set a value from form */}
            {props.children}
        </Create.Provider>
    )
}
export default Providers