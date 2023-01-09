import React from 'react'
import "./index.css"

function FormValue() {
  return (
    <section className="section-form-content">
                    <div>
                        <button type="button" className="button-subscription">
                                
                                <span className="span-button">Try it free 7 days </span>then 20$/mo. thereafter
                        </button>
                    </div>

                    <div className="div-form">
                        <form>
                            <input type="text" className="input-form" placeholder="First Name"/>
                            <p className="span-error-input">First Name cannot be empty</p>
                            <input type="text" className="input-form" placeholder="Last Name"/>
                            <p className="span-error-input">Last Name cannot be empty</p>
                            <input type="text" className="input-form" placeholder="Email Address"/>
                            <p className="span-error-input">Looks like this is not an email</p>
                            <input type="text" className="input-form" placeholder="Password"/>
                            <p className="span-error-input">Password cannot be empty</p>
                            <button type="Summit" href="#" className="button-form-card">
                                CLAIM YOUR FREE TRIAL
                            </button> 
                        </form>
                        <p className="terms-and-service-p">
                             By clicking the button, you are agreeing to
                             our <a className="terms-and-service-a">Term and Services</a>
                        </p>
                    </div>
                </section>
  )
}

export {FormValue}