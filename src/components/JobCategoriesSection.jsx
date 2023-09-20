import React from "react";
import "/src/css/style.css";

export const JobCategoriesSection = () => {
    return (
        <div className="section-container JobCategoriesSection bottom-border">
            <div className="main-container">
                <div className="title-1">Job Categories</div>
                <div className="list-horizontal tag-section">
                    <div className="tag-styled not-active">
                       Administration and Clerical
                    </div>
                    <div className="tag-styled not-active">
                       Creative and Design
                    </div>
                    <div className="tag-styled not-active">
                       Customer Service
                    </div>
                    <div className="tag-styled not-active">
                       Education
                    </div>
                    <div className="tag-styled not-active">
                       Engineering
                    </div>
                    <div className="tag-styled not-active">
                       Finance
                    </div>
                    <div className="tag-styled not-active">
                       Healthcare
                    </div>
                    <div className="tag-styled not-active">
                       Hospitality and Tourism
                    </div>
                    <div className="tag-styled not-active">
                       Human Resources (HR)
                    </div>
                    <div className="tag-styled active">
                        <div className="text-wrapper">Information Technology (IT)</div>
                    </div>
                    <div className="tag-styled not-active">
                       Legal
                    </div>
                    <div className="tag-styled not-active">
                       Manufacturing and Operations
                    </div>
                    <div className="tag-styled not-active">
                       Nonprofit and Social Services
                    </div>
                    <div className="tag-styled not-active">
                       Real Estate
                    </div>
                    <div className="tag-styled not-active">
                       Retail
                    </div>
                    <div className="tag-styled not-active">
                       Sales and Marketing
                    </div>
                    <div className="tag-styled not-active">
                       Science and Research
                    </div>
                    <div className="tag-styled not-active">
                       Transportation and Logistics
                    </div>
                </div>
            </div>
        </div>
    );
};
