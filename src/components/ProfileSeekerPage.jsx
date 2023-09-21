import React from 'react'
import { NavbarSignedSeeker } from "./Navbars"
import { ProfileSeekerMainSec } from './ProfileSeekerMainSec'
import { AppliedToJobsSection } from './AppliedToJobsSection'
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