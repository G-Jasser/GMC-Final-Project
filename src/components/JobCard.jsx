import React from "react";
import "/src/css/card_style.css";

export const JobCard = ({ JobDetail }) => {
    const JobDetailMock = { //DELETE THIS LATER
        job_title: "Software Engineer",
        company_name: "Tech Company",
        location: "Country, City, Address",
        salary: "12,35234d per hour",
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
            </div>

        </div>
    );
};