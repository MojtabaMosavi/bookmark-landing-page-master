import React from "react";
import Slider from "Components/Slider/Slider";
import data from "./Feature-data";
import "./features.scss";

const Features = () => {
    return (
        <section className="features">
            <div className="features__wrapper">
                <div className="features__content">
                    <h2 className="features__heading">Features</h2>
                    <p className="features__text">Our aim is to make it quick and easy for you to access your 
                    favourite websites. Your bookmarks sync between your devices so you can access them on the 
                    go.</p>
                </div>
                <Slider data={data}/>
            </div>
        </section>
    );
}
 
export default Features;