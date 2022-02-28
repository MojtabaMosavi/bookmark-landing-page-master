import React from "react";
import PropTypes from "prop-types";
import "./hamburgernav.scss";

const HamburgerNav = ({toggled,classes,controls,handleClick}) => {
    return (
        <button type="button" 
                aria-expanded={toggled ? "true": "false"}
                className={`hamburger-nav ${toggled ? "hamburger-nav--active":""} ${classes}`}
                aria-label={toggled ? "open navigation":"close navigation"}
                aria-controls={controls}
                onClick={handleClick}> 
            <span className="hamburger-nav__bar" aria-hidden="true"></span>
        </button>
    );
}

HamburgerNav.prototype = {
    toggled: PropTypes.bool,
    classes: PropTypes.string,
    controls: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
}

HamburgerNav.defaultProps = {
    toggled: false,
    classes: "",
    controls: "",
    handleClick: f => f,
}
export default HamburgerNav 
