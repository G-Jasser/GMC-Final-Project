import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

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
            <Link to={'/'} className="item">About us</Link>
          </div>
          <div className="frame-2">
            <div className="text-wrapper">For Employers</div>
            <Link to={'/company/profile/CHANGETHISLATER'} className="item">Your Company Profile</Link>
            <Link to={'/company/job-posts'} className="item">Your Job Posts</Link>
            <Link to={'/company/new-post'} className="item">Create a new Job Post</Link>
          </div>
          <div className="frame-2">
            <div className="text-wrapper">For Job Seekers</div>
            <Link to={'/applicant/profile/CHANGETHISLATER'} className="item">Your Profile</Link>
            <Link to={'/jobs/signed'} className="item">Browse Job Posts</Link>
            <Link to={'/applicant/profile/CHANGETHISLATER'} className="item">Your Application Status</Link>
          </div>
        </div>
      </div>
      <div className="frame-3">
        <div className="container">
          <Link to={'/'} className="title-2">Privacy Policy</Link>
          <div className="text-wrapper-2">.</div>
          <Link to={'/'} className="title-3">Terms of Service</Link>
          <div className="text-wrapper-2">.</div>
          <Link to={'/'} className="title-3">Contact us</Link>
        </div>
        <div className="title-wrapper">
          <p className="p">Copyright © 2023, JobQuest Central. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
