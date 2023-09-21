import React from "react";
import "/src/css/card_style.css";

export const JobCardForRecruiter = () => {
    const JobDetailMock = { //DELETE THIS LATER
        image_src: "/logos/just-logo-1.png",
        job_title: "Software Engineer",
        company_name: "Tech Company",
        location: "Country, City, Address",
        tags: [
            "Full-time",
            "Remote"
        ],
        pending_applicants: 0
    }

    return (
        <div className="job-card">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="card-frame">
                <div className="title">{JobDetailMock.job_title}</div>
                <div className="company">{JobDetailMock.company_name}</div>
                <div className="location">{JobDetailMock.location}</div>
                <div className="tags">
                    {
                        JobDetailMock.tags.map( tag => 
                        <div className="tag-styled" key={tag}>
                            {tag}
                        </div>)
                    }
                </div>
                <div className="pending-applicants">
                    Pending Applicants: {JobDetailMock.pending_applicants}
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