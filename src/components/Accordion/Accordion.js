import React,{useState} from "react";
import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";

const Accordion = ({data}) => {
    
    return (
        <ul className="accordion">
            {
                data.map((item,i) => {
                    return(
                        <AccordionItem 
                            {...item} 
                            key={i}/>
                    )
                })
            }
        </ul>
    );
}

Accordion.prototype ={
    data: PropTypes.array.isRequired
}

Accordion.defaultProps = {
    data:[]
}
 
export default Accordion;