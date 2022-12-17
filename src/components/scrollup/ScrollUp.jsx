import React from "react";
import "./scrollup.css";

const ScrollUp = () => {

    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

    return (
        <a href="#" className="scrollUp">
            <i className="uil uil-arrow-up scrollup_icon"/>
        </a>
    )
}

export default ScrollUp