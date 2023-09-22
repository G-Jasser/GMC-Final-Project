import React from "react";
import "/src/css/card_style.css";
import { useOutletContext, useParams } from "react-router-dom";

export const JobPostDetails = () => {
    const params = useParams()
    const [postList] = useOutletContext()
    const filteredPostList = postList.filter(function (post) {
        return post._id == params.jobID;
    })

    const [JobDetail] = filteredPostList

    return (
        <div className="job-post-container">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="top">
                <div className="title">{JobDetail.job_title}</div>
                <div className="company">{JobDetail.company_name}</div>
                <div className="location">{JobDetail.location}</div>
                <div className="tags">
                    <div className="tag-styled salary">
                        {JobDetail.salary}
                    </div>
                </div>
                <div className="btn-right">
                    <button className="button-styled secondary-button">
                        Apply
                    </button>
                </div>
            </div>
            <div className="middle">
                <div className="title-2">Job Requirements:</div>
                <p className="text-normal">
                    {JobDetail.job_requirements}
                </p>
                <div className="title-2">Responsibilities:</div>
                <p className="text-normal">
                    {JobDetail.job_responsibilities}
                </p>
            </div>

        </div>
    );
};

export const JobPostDetailsApplied = ({ JobDetail }) => {
    const JobDetailMock = JobDetail || { //DELETE THIS LATER
        job_title: "Software Engineer",
        company_name: "Tech Company",
        location: "Country, City, Address",
        salary: "12,35234d per hour",
        job_details: "Aliquam eu tempus augue. Vestibulum ac enim vitae orci cursus scelerisque id nec ex. Nullam ligula tellus, dapibus et sem ut, faucibus elementum eros. Nunc faucibus metus lobortis nisi luctus ultrices. Praesent non vulputate tortor. Curabitur luctus mollis fringilla. Curabitur quis justo at nunc rutrum lacinia sed vitae mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc at vestibulum leo."
        ,
        job_responsibilities: "Proin aliquam eleifend dui, sit amet posuere ex consequat in. Sed vitae elit turpis. Fusce vel sapien at elit tempus facilisis. Pellentesque efficitur, elit a viverra elementum, lectus nunc congue quam, ac placerat mi enim ut mauris. Nulla sagittis augue at quam cursus, eu pellentesque metus dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque iaculis blandit tortor ut condimentum. Cras feugiat elit sed urna maximus tempor. Nam dolor enim, dapibus et est eu, aliquet fermentum ex. Curabitur scelerisque tempor nisl sed dictum. Sed non turpis ac ex molestie suscipit.Proin aliquam eleifend dui, sit amet posuere ex consequat in. Sed vitae elit turpis. Fusce vel sapien at elit tempus facilisis. Pellentesque efficitur, elit a viverra elementum, lectus nunc congue quam, ac placerat mi enim ut mauris. Nulla sagittis augue at quam cursus, eu pellentesque metus dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque iaculis blandit tortor ut condimentum. Cras feugiat elit sed urna maximus tempor. Nam dolor enim, dapibus et est eu, aliquet fermentum ex. Curabitur scelerisque tempor nisl sed dictum. Sed non turpis ac ex molestie suscipit"
    }

    return (
        <div className="job-post-container">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="top">
                <div className="title">{JobDetailMock.job_title}</div>
                <div className="company">{JobDetailMock.company_name}</div>
                <div className="location">{JobDetailMock.location}</div>
                <div className="tags">
                    <div className="tag-styled salary">
                        {JobDetailMock.salary}
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="title-2">Job details:</div>
                <p className="text-normal">
                    {JobDetailMock.job_details}
                </p>
                <div className="title-2">Responsibilities:</div>
                <p className="text-normal">
                    {JobDetailMock.job_responsibilities}
                </p>
            </div>

        </div>
    );
};
export const JobPostDetailsPosted = ({ JobDetail }) => {
    const JobDetailMock = JobDetail || { //DELETE THIS LATER
        job_title: "Software Engineer",
        company_name: "Tech Company",
        location: "Country, City, Address",
        salary: "12,35234d per hour",
        job_details: "Aliquam eu tempus augue. Vestibulum ac enim vitae orci cursus scelerisque id nec ex. Nullam ligula tellus, dapibus et sem ut, faucibus elementum eros. Nunc faucibus metus lobortis nisi luctus ultrices. Praesent non vulputate tortor. Curabitur luctus mollis fringilla. Curabitur quis justo at nunc rutrum lacinia sed vitae mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc at vestibulum leo."
        ,
        job_responsibilities: "Proin aliquam eleifend dui, sit amet posuere ex consequat in. Sed vitae elit turpis. Fusce vel sapien at elit tempus facilisis. Pellentesque efficitur, elit a viverra elementum, lectus nunc congue quam, ac placerat mi enim ut mauris. Nulla sagittis augue at quam cursus, eu pellentesque metus dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque iaculis blandit tortor ut condimentum. Cras feugiat elit sed urna maximus tempor. Nam dolor enim, dapibus et est eu, aliquet fermentum ex. Curabitur scelerisque tempor nisl sed dictum. Sed non turpis ac ex molestie suscipit.Proin aliquam eleifend dui, sit amet posuere ex consequat in. Sed vitae elit turpis. Fusce vel sapien at elit tempus facilisis. Pellentesque efficitur, elit a viverra elementum, lectus nunc congue quam, ac placerat mi enim ut mauris. Nulla sagittis augue at quam cursus, eu pellentesque metus dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque iaculis blandit tortor ut condimentum. Cras feugiat elit sed urna maximus tempor. Nam dolor enim, dapibus et est eu, aliquet fermentum ex. Curabitur scelerisque tempor nisl sed dictum. Sed non turpis ac ex molestie suscipit"
    }

    return (
        <div className="job-post-container">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="top">
                <div className="title">{JobDetailMock.job_title}</div>
                <div className="company">{JobDetailMock.company_name}</div>
                <div className="location">{JobDetailMock.location}</div>
                <div className="tags">
                    <div className="tag-styled salary">
                        {JobDetailMock.salary}
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="title-2">Job details:</div>
                <p className="text-normal">
                    {JobDetailMock.job_details}
                </p>
                <div className="title-2">Responsibilities:</div>
                <p className="text-normal">
                    {JobDetailMock.job_responsibilities}
                </p>
            </div>

        </div>
    );
};