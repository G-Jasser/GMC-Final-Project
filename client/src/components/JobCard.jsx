import React, { useState } from "react";
import "/src/css/card_style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../JS/postSlice/postSlice";

export const JobCard = ({ postDetail }) => {

    return (
        <Link to={postDetail._id} className="job-card">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="card-frame">
                <div className="title-2">{postDetail.job_title}</div>
                <div className="company">{postDetail.company_name}</div>
                <div className="location">{postDetail.location}</div>
                <div className="tags">
                        <div className="tag-styled">
                            {postDetail.salary}
                        </div>
                </div>
            </div>

        </Link>
    );
};

export const JobCardForRecruiter = ({ postDetail }) => {
    const dispatch = useDispatch()
    const [isDeleted, setIsDeleted] = useState(false)

    return (
        <Link to={postDetail._id} className="job-card" style={isDeleted?{display:"none"}:{}}>
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="card-frame">
                <div className="title-2">{postDetail.job_title}</div>
                <div className="company">{postDetail.company_name}</div>
                <div className="location">{postDetail.location}</div>
                <div className="tags">
                        <div className="tag-styled">
                            {postDetail.salary}
                        </div>
                </div>
                <div className="pending-applicants text-normal">
                    Pending Applicants: {postDetail.pending_applicants}
                </div>
                <div className="btn-right double-button-container">
                    <Link to={`/company/edit-post/${postDetail._id}`} className="button-styled primary-button">
                        Edit Post
                    </Link>
                    <button className="button-styled secondary-button" onClick={
                        () => {
                            dispatch(deletePost(postDetail._id))
                            setIsDeleted(true)
                            }}>
                        Delete
                    </button>
                </div>
            </div>
        </Link>
    );
};

export const JobCardForSeeker = ({ postDetail }) => {
    return (
        <Link to={postDetail._id} className="job-card">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="card-frame">
                <div className="title-2">{postDetail.job_title}</div>
                <div className="company">{postDetail.company_name}</div>
                <div className="location">{postDetail.location}</div>
                <div className="tags">
                        <div className="tag-styled">
                            {postDetail.salary}
                        </div>
                </div>
                <div className="pending-applicants text-normal">
                    Pending Applicants: {postDetail.application_status}
                </div>
            </div>
        </Link>
    );
};

