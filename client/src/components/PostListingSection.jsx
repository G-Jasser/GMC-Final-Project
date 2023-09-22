import React, { useEffect } from "react";
import "/src/css/style.css";
import { JobCard, JobCardForRecruiter, JobCardForSeeker } from "./JobCard";
import { JobPostDetails, JobPostDetailsApplied, JobPostDetailsPosted } from "./JobPostDetails";
import { MockApplicantStatus, MockJobList } from "/src/assets/MockPostLists"; //Delete Later
import { JobSearchBar } from "./JobSearchBar";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../JS/postSlice/postSlice";

export const AppliedToJobsSection = () => {
    const posts=useSelector((store)=>store.post?.post) || []
    return (
        <div className="section-container JobSearchSection bottom-border max-height-sc">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Applied to Jobs</div>
                    <div className="list-scrollable min-width-500">
                        {posts.map(post => <JobCardForSeeker postDetail={post} key={post.job_id} />)}
                    </div>
                </div>
                <div className="job-post-section min-width-500">
                    <JobPostDetailsApplied/>
                </div>
            </div>
        </div>
    );
};

export const JobSearchSection = () => {
    // const dispatch=useDispatch()
    // useEffect(() => {
    //   dispatch(getPost())
    // }, [])
    const posts=useSelector((store)=>store.post?.post) || []
    return (
        <div className="section-container JobSearchSection bottom-border max-height-sc">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Search Posted Jobs</div>
                    <JobSearchBar />
                    <div className="list-scrollable min-width-500">
                        {posts.map(post =><JobCard postDetail={post} key={post._id} />)}
                    </div>
                </div>
                <div className="job-post-section min-width-500">
                    <Outlet context={[posts]}/>
                </div>
            </div>
        </div>
    );
};

export const PostedJobsSection = () => {
    const posts=useSelector((store)=>store.post?.post) || []
    return (
        <div className="section-container JobSearchSection bottom-border max-height-sc">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Your Job Posts</div>
                    <div className="btn-ctr">
                        <Link to={"/company/new-post"} className="button-styled secondary-button">
                            Add a new Job Post
                        </Link>
                    </div>
                    <div className="list-scrollable min-width-500">
                        {posts.map(post => <JobCardForRecruiter postDetail={post} key={post.job_id}/>)}
                    </div>
                </div>
                <div className="job-post-section min-width-500">
                    <Outlet context={[posts]}/>
                </div>
            </div>
        </div>
    );
};
