import React from "react";
import "/src/css/style.css";
import { JobCard } from "./JobCard";
import { JobSearchBar } from "./JobSearchBar";
import { JobPostDetails } from "./JobPostDetails";
import { MockJobList } from "/src/assets/MockPostLists"; //DELETE LATER

export const JobSearchSection = () => {
    return (
        <div className="section-container JobSearchSection bottom-border max-height-sc">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Search Posted Jobs</div>
                    <JobSearchBar />
                    <div className="list-scrollable min-width-500">
                        {MockJobList.map(post =><JobCard postDetail={post} key={post.job_id} />)}
                    </div>
                </div>
                <div className="job-post-section min-width-500">
                    <JobPostDetails/>
                </div>
            </div>
        </div>
    );
};
