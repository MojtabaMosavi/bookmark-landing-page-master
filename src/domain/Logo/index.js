import logo from "./logo-bookmark.svg";
import PropTypes from "prop-types";
import "./logo.scss";

const Logo = (props) => {
    return (
        <a href="/" className={`"logo" ${props.isActive ? "logo--white" : ""}`}>
            <image src={logo} alt="logo" className="logo__icon"/>
        </a>
    );
}

Logo.propTypes = {
    isActive: PropTypes.bool,
}

Logo.defaultProps = {
    isActive:false
}
 
export default Logo
