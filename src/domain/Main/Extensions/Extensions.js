import React from "react";
import data from "./extensions-data";
import Extension from "./Extension/Extension";
import "./extensions.scss";

const Extensions = () => {
    return (
        <section className="extensions container">
            <div className="extensions__wrapper">
                <div className="extensions__content">
                    <h2 className="extensions__heading">Download the extension</h2>
                    <p className="extensions__description">We’ve got more browsers in the pipeline. Please do let 
                    us know if you’ve got a favourite you’d like us to prioritize.</p>
                </div>
                <ul className="extensions__chocies">
                    {
                        data.map((item,i)=> {
                            return(
                                <Extension {...item} key={i}/>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
}
 
export default Extensions;