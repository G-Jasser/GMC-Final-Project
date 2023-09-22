import React, { useState } from "react";
import "/src/css/style.css";
import { useDispatch } from "react-redux";
import { addPost } from "../JS/postSlice/postSlice";

export const NewPostSection = () => {
    const [newpost, setnewpost] = useState({
        job_title: "",
        company_name: "",
        location: "",
        salary: "",
        pending_applicants: "",
        job_requirement: "",
        job_responsibilities: ""
    })
    const dispatch=useDispatch()
    return (
        <div className="section-container form-container-2 bottom-border max-height-sc min-height-5">
            <div className="form-style-2 max-width width100p">
                <div className="title-1">Job Post Details</div>
                <p className="text-normal">Provide information about your job offer</p>
                <div className="input-frame">
                    <label className="text-wrapper">Job Title:</label>
                    <input className="textfield" type="text" onChange={(e) => setnewpost({ ...newpost, job_title: e.target.value })} />
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Job Location:</label>
                    <input className="textfield" type="text" onChange={(e) => setnewpost({ ...newpost, location: e.target.value })}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Requirements:</label>
                    <textarea className="textfield" onChange={(e) => setnewpost({ ...newpost, job_requirement: e.target.value })}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Responsibilities:</label>
                    <textarea className="textfield" onChange={(e) => setnewpost({ ...newpost, job_responsibilities: e.target.value })}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Salary offer:</label>
                    <input className="textfield" type="text" onChange={(e) => setnewpost({ ...newpost, salary: e.target.value })}/>
                </div>
                <div className="btn-ctr">
                    <button className="button-styled secondary-button" onClick={() =>dispatch(addPost(newpost))}>
                        Submit Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export const EditPostSection = () => {
    const [newpost, setnewpost] = useState({
        job_title: "",
        company_name: "",
        location: "",
        salary: "",
        pending_applicants: 0,
        job_requirement: "",
        job_responsibilities: ""
    })
    const dispatch=useDispatch()
    return (
        <div className="section-container form-container-2 bottom-border max-height-sc min-height-5">
            <div className="form-style-2 max-width width100p">
                <div className="title-1">Edit The Job Post Details</div>
                <p className="text-normal">Edit information about your job offer</p>
                <div className="input-frame">
                    <label className="text-wrapper">Job Title:</label>
                    <input className="textfield" type="text" onChange={(e) => setnewpost({ ...newpost, job_title: e.target.value })} />
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Job Location:</label>
                    <input className="textfield" type="text" onChange={(e) => setnewpost({ ...newpost, location: e.target.value })}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Requirements:</label>
                    <textarea className="textfield" onChange={(e) => setnewpost({ ...newpost, job_requirement: e.target.value })}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Responsibilities:</label>
                    <textarea className="textfield" onChange={(e) => setnewpost({ ...newpost, job_responsibilities: e.target.value })}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Salary offer:</label>
                    <input className="textfield" type="text" onChange={(e) => setnewpost({ ...newpost, salary: e.target.value })}/>
                </div>
                <div className="btn-ctr">
                    <button className="button-styled secondary-button" onClick={() =>dispatch(addPost(newpost))}>
                        Submit Post
                    </button>
                </div>
            </div>
        </div>
    );
};
