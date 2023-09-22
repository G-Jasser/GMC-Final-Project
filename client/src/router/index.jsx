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
  },
  {
    path: "/jobs/signed",
    element: <JobBrowserPage signed={true} />
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
        element: <PostedJobsPage />
      },
      {
        path: "/company/new-post",
        element: <NewPostPage/>
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