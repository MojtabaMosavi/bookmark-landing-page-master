import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Extensions from "./extensions/Extension";
import "./main.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper">
                <Hero/>
                <Features/>
                <Extensions/>
            </div>
        </main>
    );
}
 
export default Main;