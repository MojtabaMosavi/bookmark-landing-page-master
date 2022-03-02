import React from "react";
import PropTypes from "prop-types";

const IconMenu = ({icons,id,state}) => {
    const toggle = state ? "icon-menu--active":"";
    return (
        <ul className={`icon-menu ${id}__icons ${toggle}`}>
            {icons.map(({icon,name},index) => {
                return (
                    <li className={`icon-menu__item ${id}__icons-item`}  key={index}>
                        <a href="#" 
                           className={`icon-menu__link ${id}__icon-link`} 
                           aria-hidden="true" 
                           aria-label={`icon ${name}`}>
                            <img src={icon} />
                        </a>
                    </li>
                )
                })
            }
        </ul>
    );
}

IconMenu.proptypes = {
    icons:PropTypes.array.isRequired,
    id: PropTypes.string,
}

IconMenu.defaultProps = {
    icons: [],
    id: ""
}
 
export default IconMenu;