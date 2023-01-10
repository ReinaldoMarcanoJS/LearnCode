// import React, { useState } from "react";
// import "./index.css";
// import  { useRef } from "react";
// import { useForm } from "../Hooks/useform";

import React from "react";
import "./index.css";
import  { useRef } from "react";
import { useForm } from "../Hooks/useform";
function FormValue() {

 

    const initialData = {
      firstname : '',
      lastname : '',
      email : '',
      password : ''
    }
    
    const onValidate = (form) => {
      let isError = false;
      let errors = {};

      if(!form.firstname.trim()){
        errors.firstname = "el campo Nombr viene vacio";
        isError = true;
      }
      return isError ? errors : null;
    }

    const {
      form,
      loading,
      handleChange,
      handleSubmit,
      errors
  } = useForm(initialData,onValidate)


    
  return (
    <section className="section-form-content">
      <div>
        <button type="button" className="button-subscription">
          <span className="span-button">Try it free 7 days </span>then 20$/mo.
          thereafter
        </button>
      </div>

      <div className="div-form" >
        <form action="/" className="form"  onSubmit={(e) => handleSubmit(e)}>

          <input 
          type="text" 
          className="input-form" 
          placeholder="First Name" 
          name='firstname'
          onChange={(e) => handleChange(e)}
           />

          {errors.firstname && <p className="span-error-input">First Name cannot be empty</p>} 
          <input 
          type="text" 
          className="input-form" 
          placeholder="Last Name" 
          name="lastname"
          onChange={(e) => handleChange(e)}

          />
          
          <p className="span-error-input">Last Name cannot be empty</p>
          <input
            type="text"
            className="input-form"
            placeholder="Email Address"
            name="email"
            onChange={(e) => handleChange(e)}

            />

          <p className="span-error-input">Looks like this is not an email</p>
          <input
            type="password"
            className="input-form"
            placeholder="Password"
            name="password"
            onChange={handleChange}

            />
            
          <p className="span-error-input" >Password cannot be empty</p>

          <button 
          type="button"
          href="#" 
          className="button-form-card" 
          onClick={(e) => handleSubmit(e)}>
            CLAIM YOUR FREE TRIAL
          </button>

        </form>
        <p className="terms-and-service-p">
          By clicking the button, you are agreeing to our
          <a className="terms-and-service-a">Term and Services</a>
        </p>
      </div>
    </section>
  );
}

export { FormValue };

// function FormValue() {


//     //const validationsForm = (form) => {
        
        
        
//     //     if(!form.firstname){
//     //         errors.firstname = true;
//     //     }
//     //     if(!form.email){
//     //         errors.email = true;
//     //     }
//     //     if(!form.lastname){
//     //         errors.lastname = true;
//     //     }
//     //     if(!form.password){
//     //         errors.password = true;
//     //     }
        
//     //     return errors
    
//     // };
//     const errors = {
//         email: false,
//         password:   false,
//         firstname: false,
//         lastname: false
//     }


//         let form = useRef(null);
        
//    const handleSubmit = (event) => {
//      event.preventDefault();
//      const errors = {
//         email: false,
//         password:   false,
//         firstname: false,
//         lastname: false
//     }
//      const formData = new FormData(form.current);
//      const data = {
//         email: formData.get('email'),
//         password: formData.get('password'),
//         firstname: formData.get('firstname'),
//         lastname: formData.get('lastname')
//      }

//             if(!data.firstname){
//                 errors.firstname = true;
//             }
//             if(!data.email){
//                 errors.email = true;
//             }
//             if(!data.lastname){
//                 errors.lastname = true;
//             }
//             if(!data.password){
//                 errors.password = true;
//             }
//         return errors
//    };

//   return (
//     <section className="section-form-content">
//       <div>
//         <button type="button" className="button-subscription">
//           <span className="span-button">Try it free 7 days </span>then 20$/mo.
//           thereafter
//         </button>
//       </div>

//       <div className="div-form" >
//         <form   onSubmit={handleSubmit} className="form" ref={form}>

//           <input 
//           type="text" 
//           className="input-form" 
//           placeholder="First Name" 
//           name="firstname"
//           value={form.firstname} 
          
//           /> 

//           {errors.firstname &&  <p className="span-error-input">First Name cannot be empty</p>}
//           <input 
//           type="text" 
//           className="input-form" 
//           placeholder="Last Name" 
//           name="lastname"
//           value={form.lastname} 
//           />
//           {errors.lastname && <p className="span-error-input">Last Name cannot be empty</p>}
          
//           <input
//             type="email"
//             className="input-form"
//             placeholder="Email Address"
//             name="email"
//             value={form.email} 
//             />
//           {errors.email && <p className="span-error-input">Looks like this is not an email</p> }

          
//           <input
//             type="password"
//             className="input-form"
//             placeholder="Password"
//             name="password"
//             value={form.password} 
//             />
//           {errors.password && <p className="span-error-input" >Password cannot be empty</p> }
            
          

//           <button 
//           type="button"
//           href="#" 
//           className="button-form-card" 
//           onClick={(e) => handleSubmit(e)}
//           >
//             CLAIM YOUR FREE TRIAL
//           </button>
//         </form>
//         <p className="terms-and-service-p">
//           By clicking the button, you are agreeing to our
//           <a className="terms-and-service-a">Term and Services</a>
//         </p>
//       </div>
//     </section>
//   );
//   }

// export { FormValue };
