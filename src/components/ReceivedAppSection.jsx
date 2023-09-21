import React from "react";
import "/src/css/style.css";
import { ApplicantCard } from "./ApplicantCard";
import { MockApplicantList } from "/src/assets/MockPostLists";

export const ReceivedAppSection = () => {
    return (
        <div className="section-container JobSearchSection bottom-border max-height-sc">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Received Applications</div>
                    <div className="list-scrollable min-width-500">
                        {MockApplicantList.map(applicant => <ApplicantCard applicantDetail={applicant} key={applicant.applicant_id}/>)}
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src="/logos/logo-full.png" alt="" />
                </div>
            </div>
        </div>
    );
};
