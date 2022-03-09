import React,{useState} from "react";
import Slide from "../Slide/Slide";
import "./slider.scss";

const Slider = ({data}) => {
    const [index,setIndex] = useState(0);

    return (
        <div className="main__slider slider">
            <div className="slider__wrapper">
                <ol className="slider__pignation">
                    {data.map(({searchName},i) => {
                        return (
                            <li className="slider__search-wrapper" key={i}>
                                <button tpye="button"
                                    className={`slider__search ${index === i ? "slider__search--selected":""}`}
                                    aria-controls={`slide${i}`}
                                    aria-expanded={`${i=== index ? "true":"false"}`}
                                    onClick={() => setIndex(index => index=i)}
                                    >
                                    {searchName}
                                </button>
                            </li>
                        )
                    })
                    }

                </ol>
                <div className="slider__track-wrapper">
                    <ul className="slider__track container">
                        
                        {
                            data.map((item,i) => {
                                return (
                                    <Slide data={item} index={index} key={i}/> 
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
}
 
export default Slider;