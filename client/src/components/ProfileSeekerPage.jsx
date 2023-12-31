import React from 'react'
import { NavbarSignedSeeker } from "./Navbars"
import { ProfileSeekerMainSec } from "./ProfileMainSection"
import { AppliedToJobsSection } from './PostListingSection'
import { GeneralFooter } from './GeneralFooter'

const ProfileSeekerPage = () => {
  return (
    <>
      <NavbarSignedSeeker />
      <ProfileSeekerMainSec />
      <AppliedToJobsSection />
      <GeneralFooter />
    </>
  )
}

export default ProfileSeekerPage