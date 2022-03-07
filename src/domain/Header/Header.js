import React,{ useState,useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "../Logo";
import HamburgerNav from "Components/HamburgerNav/HamburgerNav";
import Menu from "Components/Menu/Menu";
import IconMenu from "Components/IconMenu/IconMenu";
import facebook from "Images/icon-facebook.svg";
import twitter from "Images/icon-twitter.svg";
import "./header.scss";

const data = require("./menu-data.json");
const icons = [{name:"facebook",icon:facebook},{name:"twitter",icon:twitter}]

const Header = () => {
    const [toggle,setToggle] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("no-y-scroll",toggle);
    },[toggle]);


    const isActive = toggle ? "hamburger-nav--active" : "";
    const menuToggle = toggle ? "header__menu-wrapper--visible":"";
    return (
        <header className="header">
            <div className="header__wrapper container" >
                <Logo isActive={toggle}/>
                <HamburgerNav classes={isActive}
                              handleClick={() => setToggle(toggle => !toggle)}/>
                 <div className={`header__menu-wrapper ${menuToggle}`}>
                    <Menu links={data.links} id={"header"} state={toggle}/>
                    <IconMenu icons={icons} id={"header"}/>
                 </div>
            </div>
        </header>
    );
}
 
export default Header;