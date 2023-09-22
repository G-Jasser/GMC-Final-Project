import React, { useState } from "react";
import "/src/css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../JS/postSlice/postSlice";
import { useParams } from "react-router-dom";

export const NewPostSection = () => {
    const [newpost, setnewpost] = useState({
        job_title: "",
        company_name: "",
        location: "",
        salary: "",
        pending_applicants: 0,
        job_requirements: "",
        job_responsibilities: ""
    })
    const dispatch=useDispatch()
    return (
        <div className="section-container form-container-2 bottom-border max-height-sc min-height-5">
            <div className="form-style-2 max-width width100p">
                <div className="title-1">Job Post Details</div>
                <p className="text-normal">Provide information about your job offer</p>
                <div className="input-frame">
                    <label className="text-wrapper">Company Name:</label>
                    <input className="textfield" type="text" onChange={(e) => setnewpost({ ...newpost, company_name: e.target.value })} />
                </div>
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
                    <textarea className="textfield" onChange={(e) => setnewpost({ ...newpost, job_requirements: e.target.value })}/>
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

    const posts=useSelector((store)=>store.post?.post) || []
    const params = useParams()
    const [uneditedPost] = posts.filter((post) => post._id == params.jobID)
    const [editedPost, setEditedPost] = useState(uneditedPost)
    const dispatch=useDispatch()

    const handle_company_name_change = (e) => {
        if(e.target.value == "")
            setEditedPost({ ...editedPost, company_name: e.target.placeholder })
        else
            setEditedPost({ ...editedPost, company_name: e.target.value })
    }
    const handle_job_title_change = (e) => {
        if(e.target.value == "")
            setEditedPost({ ...editedPost, job_title: e.target.placeholder })
        else
            setEditedPost({ ...editedPost, job_title: e.target.value })
    }
    const handle_location_change = (e) => {
        if(e.target.value == "")
            setEditedPost({ ...editedPost, location: e.target.placeholder })
        else
            setEditedPost({ ...editedPost, location: e.target.value })
    }
    const handle_job_requirements_change = (e) => {
        if(e.target.value == "")
            setEditedPost({ ...editedPost, job_requirements: e.target.placeholder })
        else
            setEditedPost({ ...editedPost, job_requirements: e.target.value })
    }
    const handle_job_responsibilities_change = (e) => {
        if(e.target.value == "")
            setEditedPost({ ...editedPost, job_responsibilities: e.target.placeholder })
        else
            setEditedPost({ ...editedPost, job_responsibilities: e.target.value })
    }
    const handle_salary_change = (e) => {
        if(e.target.value == "")
            setEditedPost({ ...editedPost, salary: e.target.placeholder })
        else
            setEditedPost({ ...editedPost, salary: e.target.value })
    }


    return (
        <div className="section-container form-container-2 bottom-border max-height-sc min-height-5">
            <div className="form-style-2 max-width width100p">
                <div className="title-1">Edit The Job Post Details</div>
                <p className="text-normal">Edit information about your job offer</p>
                <p className="text-subtitle">Leave the input field empty to keep it the same info</p>
                <div className="input-frame">
                    <label className="text-wrapper">Company Name:</label>
                    <input className="textfield" placeholder={uneditedPost.company_name} type="text" onChange={handle_company_name_change} />
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Job Title:</label>
                    <input className="textfield" placeholder={uneditedPost.job_title} type="text" onChange={handle_job_title_change}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Job Location:</label>
                    <input className="textfield" placeholder={uneditedPost.location} type="text" onChange={handle_location_change}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Requirements:</label>
                    <textarea className="textfield" placeholder={uneditedPost.job_requirements} onChange={handle_job_requirements_change}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Responsibilities:</label>
                    <textarea className="textfield" placeholder={uneditedPost.job_responsibilities} onChange={handle_job_responsibilities_change}/>
                </div>
                <div className="input-frame">
                    <label className="text-wrapper">Salary offer:</label>
                    <input className="textfield" placeholder={uneditedPost.salary} type="text" onChange={handle_salary_change}/>
                </div>
                <div className="btn-ctr">
                    <button className="button-styled secondary-button" onClick={() =>dispatch(updatePost(editedPost))}>
                        Update Post
                    </button>
                </div>
            </div>
        </div>
    );
};
