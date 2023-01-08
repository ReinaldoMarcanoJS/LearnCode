import React, { createFactory } from "react";



import "./index.css"
function CardForm(){
    return(
        <React.Fragment>
            <section className="section-content-card">

                <section className="section-info">
                    <div>
                        <div>
                            <h1 className="learn-code-h1">
                                Learn to code by <br></br>
                                watching others
                            </h1>
                        </div>
                        <div>
                            <p className="p-info-card">
                                See how experienced developers solve 
                                problems in real-time. Watching 
                                scripted tutorials is great, but understanding how
                                developers think is invaluable.
                            </p>
                        </div>
                    </div>
                </section>
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
                            <button type="button" href="#" className="button-form-card">
                                CLAIM YOUR FREE TRIAL
                            </button> 
                        </form>
                        <p className="terms-and-service-p">
                             By clicking the button, you are agreeing to
                             our <a className="terms-and-service-a">Term and Services</a>
                        </p>
                    </div>
                </section>
            
            </section>

        </React.Fragment>
        

    )
}

export {CardForm}