import React from 'react'
import "/src/css/style.css";
import { NavbarUnsigned } from "./NavbarUnsigned";
import { FindDreamSection } from "./FindDreamSection";
import { JobCategoriesSection } from "./JobCategoriesSection";
import { JobSearchSection } from "./JobSearchSection";
import { GeneralFooter } from "./GeneralFooter";

const JobBrowserPage = () => {
  return (
    <>
        <NavbarUnsigned />
        <FindDreamSection />
        <JobCategoriesSection />
        <JobSearchSection />
        <GeneralFooter />
    </>
  )
}

export default JobBrowserPage