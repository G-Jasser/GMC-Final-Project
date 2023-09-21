import React from 'react'
import "/src/css/style.css";
import { NavbarSignedSeeker, NavbarUnsigned } from "./Navbars";
import { FindDreamSection } from "./FindDreamSection";
import { JobCategoriesSection } from "./JobCategoriesSection";
import { JobSearchSection } from "./PostListingSection";
import { GeneralFooter } from "./GeneralFooter"

const JobBrowserPage = ({ signed }) => {
  return (
    <>
      {signed ?
        <>
          <NavbarSignedSeeker />
        </>
        :
        <>
          <NavbarUnsigned />
          <FindDreamSection />
        </>
      }
      <JobCategoriesSection />
      <JobSearchSection />
      <GeneralFooter />
    </>
  )
}

export default JobBrowserPage