import React from "react";
import PropTypes from "prop-types";
import "./slide.scss";

const Slide  = ({data,index}) => {
    const {heading,description,cta,image,id} = data;
    return (
        <li className={`slide ${index === id ? "slide--active": ""}`} id={`slide${id}`}>
            <div className="slide__content">
                <h2 className="slide__heading">{heading}</h2>
                <p className="slide__description">{description}</p>
                <a href="#" className="slide__cta">{cta}</a>
            </div>
            <div className="slide__img-wrapper">
                <img className="slide__img" alt="" src={image}></img>
            </div>
        </li>
    );
}

export default Slide;
 
Slide.prototype = {
    heading:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    cta:PropTypes.string.isRequired,
}

Slide.defaultProps = {
    heading:"",
    description:"",
    cta:"",
    image:"",
    id:""
}