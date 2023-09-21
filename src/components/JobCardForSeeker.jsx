import React from "react";
import "/src/css/card_style.css";

export const JobCardForSeeker = () => {
    const JobDetailMock = { //DELETE THIS LATER
        image_src: "/logos/just-logo-1.png",
        job_title: "Software Engineer",
        company_name: "Tech Company",
        location: "Country, City, Address",
        salary: "12,35234d per hour",
        application_status: "Pending" //Change this to an enum
    }

    return (
        <div className="job-card">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="card-frame">
                <div className="title">{JobDetailMock.job_title}</div>
                <div className="company">{JobDetailMock.company_name}</div>
                <div className="location">{JobDetailMock.location}</div>
                <div className="tags">
                        <div className="tag-styled">
                            {JobDetailMock.salary}
                        </div>
                </div>
                <div className="pending-applicants">
                    Pending Applicants: {JobDetailMock.application_status}
                </div>
            </div>
        </div>
    );
};