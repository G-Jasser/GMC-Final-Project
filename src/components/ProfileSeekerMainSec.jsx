import React from "react";
import "/src/css/style.css";

export const ProfileSeekerMainSec = () => {
    return (
        <div className="section-container ProfileMainSection bottom-border">
            <div className="container max-width">
                <div className="info">
                    <div className="title-1">John Doe</div>
                    <div className="text-normal">Experienced Software Engineer</div>
                    <button className="button-styled secondary-button">
                        Edit Profile
                    </button>
                </div>
                <button className="button-styled primary-button">
                    Sign out
                </button>
            </div>
        </div>
    );
};
