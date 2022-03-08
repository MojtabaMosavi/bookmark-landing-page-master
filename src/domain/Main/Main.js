import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import "./main.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper">
                <Hero/>
                <Features/>
            </div>
        </main>
    );
}
 
export default Main;