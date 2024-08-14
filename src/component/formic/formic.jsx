import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import { Button } from 'primereact/button'; 
 import { useRef } from 'react';
 
 import { Toast } from 'primereact/toast';
 import { useNavigate } from 'react-router-dom';
 import axios from 'axios';

 export const FieldLevelValidationExample = () => {
    const toast = useRef(null);
    const navigate= new useNavigate()
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Registered Successfully' });
    };

    function validateEmail(value) {
     
        // settt(true)
       let error;
       if (!value) {
         error = 'Required';
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
         error = 'Invalid email address';
       }
       
       return error;
     }
     
     function validateUsername(value) {
       let error;
      
       if (value.data === 'admin') {
         error = 'Nice try!';
       }else if(value===""){
         error="required bro"   
       }
       return error;
     }
     
     function validatePassword(value){
        let error;
        if(value===""){
            error="fill password"
        }
        return error
     }


     const handleSubmit = async (values) => {
      debugger;
      try {
        const queryParams = new URLSearchParams(values).toString();
        const response = await axios.get(`http://localhost:5000/api/signup?${queryParams}`);
        console.log(response.data); // Log response from backend
      } catch (error) {
        console.error('Error:', error);
      }
    };

 return(
   <div>
     <h1 style={{textAlign:'center'}} > Register Yourself </h1>
     <Toast ref={toast} />
     <Formik initialValues={{username: '',email: '',password:''}}

       onSubmit={values => {
        debugger;    
         handleSubmit(values);
          show(); 
            setTimeout(() => {
            navigate("/")
          }, 2000); 
        
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form style={{alignItems:'center'}}>

            <br/> <br/>
         
           <label htmlFor="username">Email Id :  </label>
           <Field name="email" validate={validateEmail} id="username"/> 
           {errors.email && touched.email && <span style={{color:'red'}}>{errors.email}</span> }
          
            
          <br/> <br/>

         
           <label htmlFor="username">Username :</label>
         <Field name="username" validate={validateUsername} />
           {errors.username && touched.username && <span style={{color:'red'}}>{errors.username}</span>}
          
<br/> <br/>
           
           <label htmlFor="username">Password :</label>
            <Field name="password" validate={validatePassword} />
           {errors.password && touched.password && <span style={{color:'red'}}>{errors.password}</span>}
         

           <br/> <br/>
           <Button label="Submit" severity="success" text raised />
         </Form>
       )}
     </Formik>
   </div>
 )
 }
 ;