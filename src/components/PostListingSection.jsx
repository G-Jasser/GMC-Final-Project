import React from "react";
import "/src/css/style.css";
import { JobCardForRecruiter, JobCardForSeeker } from "./JobCard";
import { JobPostDetailsApplied, JobPostDetailsPosted } from "./JobPostDetails";
import { MockApplicantStatus } from "/src/assets/MockPostLists"; //Delete Later

export const AppliedToJobsSection = () => {
    return (
        <div className="section-container JobSearchSection bottom-border max-height-sc">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Applied to Jobs</div>
                    <div className="list-scrollable min-width-500">
                        {MockApplicantStatus.map(post => <JobCardForSeeker postDetail={post} key={post.job_id} />)}
                    </div>
                </div>
                <div className="job-post-section min-width-500">
                    <JobPostDetailsApplied/>
                </div>
            </div>
        </div>
    );
};

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
                        {MockJobList.map(post => <JobCardForRecruiter postDetail={post} key={post.job_id}/>)}
                    </div>
                </div>
                <div className="job-post-section min-width-500">
                    <JobPostDetailsPosted/>
                </div>
            </div>
        </div>
    );
};
