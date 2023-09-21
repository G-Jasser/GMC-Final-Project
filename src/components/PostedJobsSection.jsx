import React from "react";
import "/src/css/style.css";
import { JobCardForRecruiter } from "./JobCardForRecruiter";
import { JobPostDetails } from "./JobPostDetails";

export const PostedJobsSection = () => {
    return (
        <div className="section-container JobSearchSection bottom-border max-height-sc">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Your Job Posts</div>
                    <div className="btn-ctr">
                        <button className="button-styled secondary-button">
                            Add a new Job Post
                        </button>
                    </div>
                    <div className="list-scrollable min-width-500">
                        <JobCardForRecruiter />
                        <JobCardForRecruiter />
                        <JobCardForRecruiter />
                    </div>
                </div>
                <div className="job-post-section min-width-500">
                    <JobPostDetails/>
                </div>
            </div>
        </div>
    );
};
