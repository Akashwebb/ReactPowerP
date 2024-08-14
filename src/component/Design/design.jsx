import React from "react";
import "./design.css"
import { Tooltip } from 'primereact/tooltip';
import { InputText } from 'primereact/inputtext';
import { useState } from "react";   
import { Slider } from "primereact/slider";
import { SelectButton } from "primereact/selectbutton";        
const Design=()=>{
  const [filter, setFilter] = useState(null);
  const [filterValues,setFilterValues]=useState([])
    return(
        <>
            

           <div id="flexing">

    <span className="p-float-label">
      <InputText id="username" className="custom-input" />
      <label htmlFor="username"> Email </label>
    </span>
    <br/> 

    <span className="p-float-label">
      <InputText id="username" className="custom-input" />
      <label htmlFor="username"> Password </label>
    </span>
          
   </div>
        
            
   <div className="card flex justify-content-center">
            <div class="flex flex-column align-items-center">
                <img alt="user header" class="w-full md:w-20rem border-round mb-4" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"  />
                <SelectButton value={filter} onChange={(e) => setFilter(e.value)}  className="mb-3" />
                <Slider
                    value={filterValues[filter]}
                    onChange={(e) => {
                        const newFilterValues = [...filterValues];
                        newFilterValues[filter] = e.value;
                        setFilterValues(newFilterValues);
                    }}
                    className="w-14rem"
                    min={0}
                    max={200}
                />
            </div>
        </div>
        </>
    )
}
export default Design;



