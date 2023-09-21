import React from "react";
import "/src/css/style.css";

export const EditProfileSection = () => {
    return (
        <div className="section-container form-container-2 bottom-border max-height-sc min-height-5">
            <div className="form-style-2 max-width width100p">
                <div className="title-1">Upload Resume</div>
                <div className="input-frame">
                    <label className="text-wrapper">Resume:</label>
                    <input className="textfield" type="file" />
                    <p className="text-subtitle">Accepted formats: PDF</p>
                </div>
                <div className="btn-ctr">
                    <button className="button-styled secondary-button btn-wd">
                        Upload
                    </button>
                </div>
                <div className="title-1">Personal Information</div>
                <div className="input-frame">
                    <label className="text-wrapper">Full Name:</label>
                    <input className="textfield" type="text" />
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Phone number:</label>
                    <input className="textfield" type="text" />
                </div>
                <div className="double-input-frame">
                    <div className="input-frame">
                        <label className="text-wrapper">Date of Birth:</label>
                        <input className="textfield" type="date" />
                    </div>
                    <div className="input-frame">
                        <label className="text-wrapper">Gender:</label>
                        <select className="textfield">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Nationality:</label>
                    <input className="textfield" type="text" />
                </div>
                <div className="btn-ctr">
                    <div className="double-button-container">
                        <button className="button-styled primary-button btn-wd">
                            Cancel
                        </button>
                        <button className="button-styled secondary-button btn-wd">
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
