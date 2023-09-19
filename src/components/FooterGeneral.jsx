import React from "react";
import "/src/css/style.css";

export const GeneralFooter = () => {
  return (
    <div className="general-footer">
      <div className="frame">
        <div>
            <img className="title" src="/logos/title.png" alt="" />
        </div>
        <div className="div">
          <div className="frame-2">
            <div className="text-wrapper">JobQuest Central</div>
            <div className="item">About us</div>
            <div className="item">Contact us</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper">For Employers</div>
            <div className="item">Overview</div>
            <div className="item">Our Offers</div>
            <div className="item">Post Jobs</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper">For Job Seekers</div>
            <div className="item">Overview</div>
            <div className="item">Browse Jobs</div>
            <div className="item">Help</div>
          </div>
        </div>
      </div>
      <div className="frame-3">
        <div className="container">
          <div className="title-2">Privacy Policy</div>
          <div className="text-wrapper-2">.</div>
          <div className="title-3">Terms of Service</div>
          <div className="text-wrapper-2">.</div>
          <div className="title-3">Contact us</div>
        </div>
        <div className="title-wrapper">
          <p className="p">Copyright © 2023, JobQuest Central. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
