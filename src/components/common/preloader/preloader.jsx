import React from "react";
import n from './preloader.module.css';
import preloader from "../../../images/preloader.gif";

const Preloader = (props) => {
    return(
        <div className={n.preloader}>
            <img src={preloader} alt=""/>
        </div>
    );
};

export default Preloader;
