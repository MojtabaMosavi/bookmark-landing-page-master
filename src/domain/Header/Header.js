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
                <HamburgerNav
                classes={isActive}
                 handleClick={() => setToggle(toggle => !toggle)}/>
            </div>
        </header>
    );
}
 
export default Header;