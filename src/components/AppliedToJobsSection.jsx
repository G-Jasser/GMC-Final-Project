import React from "react";
import "/src/css/style.css";
import { JobCardForSeeker } from "./JobCardForSeeker";
import { JobPostDetails } from "./JobPostDetails";

export const AppliedToJobsSection = () => {
    return (
        <div className="section-container JobSearchSection bottom-border max-height-sc">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Applied to Jobs</div>
                    <div className="list-scrollable min-width-500">
                        <JobCardForSeeker />
                        <JobCardForSeeker />
                        <JobCardForSeeker />
                    </div>
                </div>
                <div className="job-post-section min-width-500">
                    <JobPostDetails/>
                </div>
            </div>
        </div>
    );
};
