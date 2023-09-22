import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "/src/components/LandingPage";
import SignUpRecruiterPage from "/src/components/SignUpRecruiterPage";
import SignUpSeekerPage from "/src/components/SignUpSeekerPage";
import ProfileRecruiterPage from "/src/components/ProfileRecruiterPage";
import ProfileSeekerPage from "/src/components/ProfileSeekerPage";
import PostedJobsPage from "/src/components/PostedJobsPage";
import EditProfilePage from "/src/components/EditProfilePage";
import JobBrowserPage from "/src/components/JobBrowserPage";
import NewPostPage from "/src/components/NewPostPage";
import LoginPage from "../components/LoginPage";
import EditPostPage from "../components/EditPostPage";
import { JobPostDetails } from "../components/JobPostDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/jobs",
    element: <JobBrowserPage signed={false} />,
    children: [
      {
        path: "/jobs/:jobID",
        element: <JobPostDetails />
      }
    ]
  },
  {
    path: "/jobs/signed", //REMOVE THIS PATH AFTER SOLVING TOKEN
    element: <JobBrowserPage signed={true} />,
    children: [
      {
        path: "/jobs/signed/:jobID",
        element: <JobPostDetails />
      }
    ]
  },
  {
    path: ""
  },
  {
    path: "/company",
    children: [
      {
        path: "/company/signup",
        element: <SignUpRecruiterPage />
      },
      {
        path: "/company/profile/:companyID",
        element: <ProfileRecruiterPage />
      },
      {
        path: "/company/job-posts",
        element: <PostedJobsPage />,
        children: [
          {
            path: "/company/job-posts/:jobID",
            element: <JobPostDetails isCompany={true}/>
          }
        ]
      },
      {
        path: "/company/new-post",
        element: <NewPostPage/>
      },
      {
        path: "/company/edit-post/:jobID",
        element: <EditPostPage/>
      }
    ]
  },
  {
    path: "/applicant",
    children: [
      {
        path: "/applicant/signup",
        element: <SignUpSeekerPage />
      },
      {
        path: "/applicant/profile/:applicantID",
        element: <ProfileSeekerPage />
      },
      {
        path: "/applicant/profile/edit/:applicantID",
        element: <EditProfilePage />
      },
    ]
  },
]);
