import React from "react";
import ChildComponent from "./child";
import "./pp.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Knob } from 'primereact/knob'; 

import { ListBox } from 'primereact/listbox';
              
const ParentComponent = () => {
  
  const [mess,setmess]= useState("")
  const [dis,setdis]=useState(false)
  const [value,setValue]=useState("")
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
  const handle=()=>{
    setdis(true)
  }
  return (
    <div>
     
      {dis ?  <ChildComponent message={mess} /> : 
        <><h2>Parent Component000000000000</h2>  <br/> <br/>
        
        <span className="p-float-label">
<InputText id="username" value={mess} onChange={(e) => setmess(e.target.value)} />
<label htmlFor="username"> Message </label>
</span>   <br/>
        <button onClick={handle}> submit </button></>  }
        <br/>
        <Link to="/consumer1"> click for context  </Link>
        <h1> Other --------------------------------------------------------------------</h1>
       
        <Knob value={value} onChange={(e) => setValue(e.value)} valueTemplate={'{value}%'} />
   
        <div className="card flex justify-content-center" id="search">  
            <ListBox filter value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>

        
    </div>
  );
};

export default ParentComponent;
