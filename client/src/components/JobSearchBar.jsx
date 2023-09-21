import React from "react";
import "/src/css/style.css";

export const JobSearchBar = () => {
    return (
        <div className="advanced-search">
            <div className="double-input-frame">
                <div className="input-frame">
                    <input className="textfield" type="text" placeholder="Search by job title, company, or keyword"/>
                </div>
                <div className="input-frame">
                    <input className="textfield" type="text" placeholder="City, state, zip code"/>
                </div>
            </div>
            <button className="button-with-image button-styled secondary-button">
                <img src="/svg/search.svg" alt="Search" />
            </button>
        </div>
    );
};