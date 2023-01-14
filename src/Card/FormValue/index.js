import React from "react";
import "./index.css";
import  { useRef } from "react";
import useForm from "../Hooks/useform"; 
import {icon_Error} from "../images/icon-error.svg";
import { BiErrorCircle } from "react-icons/bi";
function FormValue() {

  const initialData = {
    firstname : '',
    lastname : '',
    email : '',
    password : ''
  };
    
    const onValidate = (form) => {
      let errors = {};
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

      if(!form.firstname.trim()){
        errors.firstname = true;
      }else if(!regexName.test(form.firstname)){
        errors.firstname = "test-reply";
      }

      if(!form.lastname.trim()){
        errors.lastname = true;
      }else if(!regexName.test(form.lastname)){
        errors.lastname = "test-reply";
      }

      if(!regexEmail.test(form.email)){
        errors.email = true;
      }

      if(!regexName.test(form.password)){
        errors.password = true;
      }
      return errors
    }
    const {
      handleChange,
      handleSubmit,
      errors,
      loading,
      form
  } = useForm(initialData,onValidate);

  return (
    <section className="section-form-content">
      <div>
        <button type="button" className="button-subscription">
          <span className="span-button">Try it free 7 days </span>then 20$/mo.
          thereafter
        </button>
      </div>

      <div className="div-form" >
        <form  className="form" onSubmit={(e) => handleSubmit(e)}>

          <input 
          type= "text" 
          className={errors.firstname ? 'check-input input-form' : 'input-form'} 
          placeholder="First Name" 
          name='firstname'
          value = {form.value}
          onChange={(e) => handleChange(e)}
           />
          

          {errors.firstname && <p className="span-error-input"> First Name cannot be empty</p>}
         
          <input 
          type="text" 
          className={ errors.lastname ? 'check-input input-form' : 'input-form'} 

          placeholder="Last Name" 
          name="lastname"
          value = {form.lastname}

          onChange={(e) => handleChange(e)}

          />
          
          
          {errors.lastname && <p className="span-error-input">Last Name cannot be empty</p>}
          <input
            type="text"
            className={ errors.email ? 'check-input input-form' : 'input-form'} 
            placeholder={errors.email ? 'email@example/com' : "Email Address"}
            name="email"
            value = {form.email}
            onChange={(e) => handleChange(e)}

            />
          

          {errors.email && <p className="span-error-input">Looks like this is not an email</p>}
          <input
            type="password"
            className={ errors.password ? 'check-input input-form' : 'input-form'} 
            placeholder="Password"
            name="password"
            value = {form.password}

            onChange={(e) => handleChange(e)}

            />
          
            
            {errors.password && <p className="span-error-input" >Password cannot be empty</p>}

          <button 
          type="button"
          href="#" 
          className="button-form-card" 
          disabled={loading}
          onClick={(e) => handleSubmit(e)}>
            {loading ? 'CLAIM YOUR FREE TRIAL' : 'CLAIM YOUR FREE TRIAL'}
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

