import React from "react";
import "/src/css/style.css";

export const NewPostSection = () => {
    return (
        <div className="section-container form-container-2 bottom-border max-height-sc min-height-5">
            <div className="form-style-2 max-width width100p">
                <div className="title-1">Job Post Details</div>
                <p className="text-normal">Provide information about your job offer</p>
                <div className="input-frame">
                    <label className="text-wrapper">Job Title:</label>
                    <input className="textfield" type="text" />
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Job Location:</label>
                    <input className="textfield" type="text" />
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Requirements:</label>
                    <textarea className="textfield" />
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Responsibilities:</label>
                    <textarea className="textfield" />
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Salary offer:</label>
                    <input className="textfield" type="text" />
                </div>
                <div className="btn-ctr">
                    <button className="button-styled secondary-button">
                        Submit Post
                    </button>
                </div>
            </div>
        </div>
    );
};
