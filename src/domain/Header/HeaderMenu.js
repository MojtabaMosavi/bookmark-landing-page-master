import React from "react";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";

const socialIcon = [{name:"facebook",icon:facebook},{name:"twitter",icon:twitter}]
const links = require("./menu-data.json")


const HeaderMenu = () => {
    return (
        <ul className="header__menu">
            {links.map((item,index) => {
                return (
                    <li className="header__item" key={index}>
                        <a href="#" className="header__link">{item}</a>
                    </li>
                )
            }) 
            }
            <li className="header__icon-wrapper">
                {socialIcon.map(({icon,name},index) => {
                    return (
                        <a href="#" 
                            className={`header__social-icon header__social-icon${name}`}
                            aria-hidden="true" 
                            aria-label={`icon ${name}`}
                            key={index}>
                            <img src={icon} />
                        </a>
                        )
                    })
                }
            </li>
        </ul>
    );
}
 
export default HeaderMenu;