import React from "react";
import "./index.css";
import useForm from "../Hooks/useform"; 
import { BiErrorCircle } from "react-icons/bi";
import iconError from "../images/icon-error.svg";
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

      if(!form.firstname === ""){
        errors.firstname = true;
        }else if(!regexName.test(form.firstname)){
        errors.firstname = true;
        }

      if(!form.lastname === ""){
        errors.lastname = true;
        }else if(!regexName.test(form.lastname)){
        errors.lastname = true;
        }
      if(!form.email === ""){
        errors.email = true;
        }else if(!regexEmail.test(form.email)){
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
          <div className="div-input" >
          <input 
            type= "text" 
            className={errors.firstname ? 'check-input input-form' : 'input-form'} 
            placeholder="First Name" 
            name='firstname'
            value = {form.firstname}
            onChange={(e) => handleChange(e)}
            />
            {errors.firstname && <img src={iconError} className="iconError"></img>}
          </div>
            {errors.firstname && <p className="span-error-input"> First Name cannot be empty</p>}
            
          <div className="div-input">
          <input 
            type="text" 
            className={ errors.lastname ? 'check-input input-form' : 'input-form'} 
            placeholder="Last Name" 
            name="lastname"
            value = {form.lastname}
            onChange={(e) => handleChange(e)}
            />
            {errors.lastname && <img src={iconError} className="iconError"></img>}
          </div>
            {errors.lastname && <p className="span-error-input">Last Name cannot be empty</p>}
          
            
          <div className="div-input">
          <input
              type="text"
              className={ errors.email ? 'check-input input-form' : 'input-form'} 
              placeholder={errors.email ? 'email@example/com' : "Email Address"}
              name="email"
              value = {form.email}
              onChange={(e) => handleChange(e)}
              />
            {errors.email &&<img src={iconError} className="iconError"></img>}
          </div>
          {errors.email && <p className="span-error-input">Looks like this is not an email</p>}

          <div className="div-input">
          
            <input
              type="password"
              className={ errors.password ? 'check-input input-form' : 'input-form'} 
              placeholder="Password"
              name="password"
              value = {form.password}
              onChange={(e) => handleChange(e)}
              />
              {errors.password && <img src={iconError} className="iconError"></img>}
            </div>
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
        <p className="terms-and-service-p">By clicking the button, you are agreeing to our <a className="terms-and-service-a">Term and Services</a>
        </p>
      </div>
    </section>
  );
}

export { FormValue };

