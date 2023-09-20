import React from "react";
import "/src/css/style.css";
import { JobCard } from "./JobCard";
import { JobSearchBar } from "./JobSearchBar";

export const JobSearchSection = () => {
    return (
        <div className="section-container JobSearchSection bottom-border">
            <div className="max-width-2 main-container">
                <div className="main-container-1">
                    <div className="title-1">Search Posted Jobs</div>
                    <JobSearchBar />
                    <div className="list-scrollable min-width-500">
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src="/logos/logo-full.png" alt="" />
                </div>
            </div>
        </div>
    );
};
