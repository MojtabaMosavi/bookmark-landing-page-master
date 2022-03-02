import React from "react";
import PropTypes from "prop-types";
import "./menu.scss";

const Menu = ({links,id,state}) => {
    const toggled = state ? "menu--active":"";
    return (
        <ul className={`menu ${id}__menu ${toggled}`}>
            {links.map((item,index) => {
                return (
                    <li className={`menu__item ${id}__item`}  key={index}>
                        <a href="#" className={`menu__link ${id}__link`}>{item}</a>
                    </li>
                )
                })
            }
        </ul>
    );
}

Menu.proptypes = {
    links:PropTypes.array.isRequired,
    id: PropTypes.string,
}

Menu.defaultProps = {
    items: [],
    id: "",
}
 
export default Menu;