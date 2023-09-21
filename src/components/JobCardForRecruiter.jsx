import React from "react";
import "/src/css/card_style.css";

export const JobCardForRecruiter = ({ postDetail }) => {
    return (
        <div className="job-card">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="card-frame">
                <div className="title">{postDetail.job_title}</div>
                <div className="company">{postDetail.company_name}</div>
                <div className="location">{postDetail.location}</div>
                <div className="tags">
                        <div className="tag-styled">
                            {postDetail.salary}
                        </div>
                </div>
                <div className="pending-applicants">
                    Pending Applicants: {postDetail.pending_applicants}
                </div>
                <div className="btn-right">
                    <button className="button-styled secondary-button">
                        Edit Post
                    </button>
                </div>
            </div>
        </div>
    );
};