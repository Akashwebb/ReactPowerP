// import React from "react";
// import { useState,useEffect,useRef } from "react";
// import data from "../data.json"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Toast } from 'primereact/toast';
// const Login=()=>{
//     const toast = useRef(null);
//       const [email,setemail]=useState("")
//       const [password,setpassword]=useState("")
//       const [allEmail,setAllEmail]=useState([])   // to store all email from data.json
//     const navigate= new useNavigate()
//       useEffect(()=>{
//         console.log(data)
//         setAllEmail(data)
//       },[])
      
//       const show = () => {
//         toast.current.show({ severity: 'success', summary: 'Logged In Successfully' });
//     };
//     const replace = () => {
//         debugger
//         toast.current.replace ({ severity: 'error', summary: 'Failed to logged In' });
//     };  
//     const remove =() =>{
//          debugger
//         //  toast.current.remove ({ severity: 'error', summary: 'Registered email is already 7' });
//          toast.current.replace ({ severity: 'error', summary: 'Already 7 users are registered' });
//     }
//       const handle=()=>{
//         debugger
//         let tt= "false"
//         //console.log("dddddddd",allEmail)
//            for(let i=0;i<allEmail.allData.length;i++){
//                console.log("----------",allEmail.allData[i],email)
//             if(allEmail.allData[i].email===email && allEmail.allData[i].pass===password){
//                 tt="true"
//                 break
//             }
             
//            }
//            if(tt==="true"){
//             show()
//             setTimeout(()=>{
//                 navigate("/parent")
//             },2000)
           
//            }else{
//             replace()
//            }
//       }
//        const handle2=()=>{
//          debugger;
//          console.log(allEmail.allData.length)
//          if(allEmail.allData.length==7){
//           remove()
//          }
//          else{
//            navigate("/register");
//          }
//        }
//     return(
//         <>
//               <Toast ref={toast} />
//             <h1 style={{textAlign:'center'}}> Sign In Please </h1>

//            Email : <input type="text" onChange={(e)=>{setemail(e.target.value)}} />  <br/> <br/>
//            Password :   <input type="text" onChange={(e)=>{setpassword(e.target.value)}}/> <br/> <br/>

//            <button onClick={handle}> Submit </button> <br/> <br/>

//            <button onClick={handle2}  > Go to Register </button>
          
//         </>
//     )
// }
// export default Login

import React, { useState, useMemo } from 'react';

const ConditionalComponent = ({ condition }) => {
  console.log('ConditionalComponent rendered');
  return <p>{condition ? 'Condition is true' : 'Condition is false'}</p>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const memoizedCondition = useMemo(() => {
    return (count % 2 === 0) || (count % 3 !== 0 && count > 4);
  }, [count]);

  const handleButtonPress = () => {
    switch (count) {
      case 1:
      case 2:
        
        setCount(count + 1);
        setCount(count + 2);
        setOtherState(pre => pre);
        break;
      case 3:
      case 4:
        setCount(count + 1);
        setCount(pre => pre + 3);
        setOtherState(pre => !pre);
        break;
      default:
        setCount(count + 1);
        setCount(count + 2);
        setOtherState(pre => !pre);
        break;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <p>Count: {count}</p>
      <p>Other State: {otherState ? 'true' : 'false'}</p>
      <button onClick={handleButtonPress}>Increment & Toggle</button>
      <ConditionalComponent condition={memoizedCondition} />
    </div>
  );
};

export default App;
