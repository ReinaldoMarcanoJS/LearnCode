import React, { createFactory } from "react";
import {FormValue} from "./FormValue/index"
import "./index.css"
import {InfoCard} from "./InfoCard/index"
function CardForm(){
    return(
        <React.Fragment>

            <section className="section-content-card">
                <InfoCard></InfoCard>
                <FormValue></FormValue>
            </section>

        </React.Fragment>
        

    )
}

export {CardForm}