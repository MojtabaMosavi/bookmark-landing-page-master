import React from "react";
import PropTypes from "prop-types";
import Logo from "../Logo";
import HamburgerNav from "../../components/HamburgerNav/HamburgerNav";
import "./header.scss"
import { useState } from "react";

const Header = () => {
    const [toggle,setToggle] = useState(false)
    const isActive = toggle ? "hamburger-nav--active" : "";
    return (
        <header className="header">
            <div className="header__wrapper container">
                <Logo isActive={false}/>
            </div>
        </header>
    );
}
 
export default Header;