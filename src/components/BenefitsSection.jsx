import React from "react";
import "/src/css/style.css";

export const BenefitsSection = () => {
    return (
        <div className="section-container BenefitsSection">
            <div className="main-container-1">
                <p className="title-1">Benefits of Posting a Job</p>
                <div className="list-1">
                    <div className="item-1">
                        <div className="title-2">Increase Visibility</div>
                        <p className="text-normal">
                            Get more exposure for your job opportunity
                        </p>
                        <div className="tag-section">
                            <div className="tags">
                                <div className="tag-styled">
                                    <div className="text-normal">Easy and Quick</div>
                                </div>
                                <div className="tag-styled">
                                    <div className="text-normal">Wide Reach</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-1">
                        <div className="title-2">Targeted Candidates</div>
                        <p className="text-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lobortis elit. Proin placerat
                            blandit purus sit amet aliquet
                        </p>
                        <div className="tag-section">
                            <div className="tags">
                                <div className="tag-styled">
                                    <div className="text-normal">Qualified and Relevant</div>
                                </div>
                                <div className="tag-styled">
                                    <div className="text-normal">Higher Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-1">
                        <div className="title-2">Save Time and Effort</div>
                        <p className="text-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lobortis elit. Proin placerat
                            blandit purus sit amet aliquet.
                        </p>
                        <div className="tag-section">
                            <div className="tags">
                                <div className="tag-styled">
                                    <div className="text-normal">Automated Processing</div>
                                </div>
                                <div className="tag-styled">
                                    <div className="text-normal">Efficient Screening</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
