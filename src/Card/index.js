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
                                See how experienced developers solve <br/>
                                problems in real-time. Watching <br/>
                                scripted tutorials is great, but <br></br>understanding how
                                developers think is invaluable.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <button type="button" className="button-subscription">
                                
                                <span className="span-button">Try it free 7 days </span>then 20$/mo. thereafter
                        </button>
                    </div>

                    <div className="div-form">
                        <form>
                            <input type="text" className="input-form" placeholder="First Name"/>
                            <input type="text" className="input-form" placeholder="Last Name"/>
                            <input type="text" className="input-form" placeholder="Email Address"/>
                            <input type="text" className="input-form" placeholder="Password"/>
                                
                            <button type="button" href="#" className="button-form-card">
                                CLAIM YOUR FREE TRIAL
                            </button> 
                        </form>
                        <p className="terms-and-service-p">
                             By clicking the button, you are agreeing to <br/>
                             our <a className="terms-and-service-a">Term and Services</a>
                        </p>
                    </div>
                </section>
            
            </section>

        </React.Fragment>
        

    )
}

export {CardForm}