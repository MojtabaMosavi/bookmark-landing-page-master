import React from "react";
import Hero from "./Hero/Hero";
import "./main.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper container">
                <Hero/>
            </div>
        </main>
    );
}
 
export default Main;