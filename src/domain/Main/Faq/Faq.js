import React from "react";
import PropTypes from "prop-types";
import Accordion from "Components/Accordion/Accordion";
import data from "./faq-data.js";
import "./faq.scss";

const Faq = () => {
    return (
        <section className="faq">
            <div className="faq__wrapper container">
                <div className="faq__header">
                    <h2 className="faq__heading">Frequently Asked Questions</h2>
                    <p className="faq__description">Here are some of our FAQs. If you have any other 
                    questions you’d like answered please feel free to email us.</p>
                </div>
                <Accordion data={data}/>
                <a href="#" className="faq__cta" >More Info</a>
            </div>
        </section>
    );
}
 
export default Faq;