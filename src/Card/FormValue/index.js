import React from "react";
import "./index.css";
import  { useRef } from "react";

function FormValue() {
    const form = useRef("hola");

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname')
    }
    console.log(data);
  };

  return (
    <section className="section-form-content">
      <div>
        <button type="button" className="button-subscription">
          <span className="span-button">Try it free 7 days </span>then 20$/mo.
          thereafter
        </button>
      </div>

      <div className="div-form" >
        <form action="/" className="form" ref={form}>

          <input 
          type="text" 
          className="input-form" 
          placeholder="First Name" 
          name="firstname" />

          <p className="span-error-input">First Name cannot be empty</p>
          <input 
          type="text" 
          className="input-form" 
          placeholder="Last Name" 
          name="lastname"/>
          
          <p className="span-error-input">Last Name cannot be empty</p>
          <input
            type="text"
            className="input-form"
            placeholder="Email Address"
            name="email"/>

          <p className="span-error-input">Looks like this is not an email</p>
          <input
            type="password"
            className="input-form"
            placeholder="Password"
            name="password"/>
            
          <p className="span-error-input" >Password cannot be empty</p>

          <button 
          type="button"
          href="#" 
          className="button-form-card" 
          onClick={handleSubmit}>
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
