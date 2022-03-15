import React,{useState} from "react";
import PropTypes from "prop-types";
import "./accordion.scss";

const AccordionItem = ({id,question,answer}) => {
    const [hidden,setHidden] = useState(false)
    return (
        <li className="accordion__item">
            <button className={`accordion__control ${hidden ? "accordion__control--active":""}`}
                    type="button"
                    aria-controls={`accordion__item-${id}`}
                    aria-expanded={`${hidden ? "true":"false"}`}
                    onClick={() => setHidden(hidden => !hidden)}
            >
                {question}
            </button>

            <div className={`accordion__content ${hidden ? "accordion__content--visible":""}`}
                 id={`accordion__item${id}`}
            >
                {answer}
            </div>
        </li>
    );
}

AccordionItem.proptotype={
    id:PropTypes.number.isRequired,
    question:PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
}
 
export default AccordionItem;