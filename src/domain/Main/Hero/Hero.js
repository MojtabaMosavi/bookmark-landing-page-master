import React from "react";
import HeroImage from "./illustration-hero.svg";
import "./hero.scss";

const Hero = () => {
    return (
        <section className="hero container">
            <article className="hero__content">
                <h1 className="hero__heading">A Simple Bookmark Manager</h1>
                <p className="hero__text">  A clean and simple interface to organize your favourite websites. 
                Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="hero__cta-wrapper">
                    <a href="#" className="hero__cta hero__cta--chrome">Get it on Chrome</a>
                    <a href="#" className="hero__cta hero__cta--firefox">Get it on Firefox</a>
                </div>
            </article>
            <div className="hero__img-wrapper">
                <img src={HeroImage} alt="" className="hero__img"></img>
            </div>

        </section>
    );
}
 
export default Hero;