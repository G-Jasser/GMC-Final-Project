import React from 'react'
import { NavbarSignedRecruiter } from './NavbarSignedRecruiter'
import { ProfileRecruiterMainSec } from './ProfileRecruiterMainSec'
import { RecruiterAboutUsSection } from './RecruiterAboutUsSection'
import { GeneralFooter } from './GeneralFooter'

const ProfileRecruiterPage = () => {
    return (
        <>
          <NavbarSignedRecruiter/>
          <ProfileRecruiterMainSec/>
          <RecruiterAboutUsSection/>
          <GeneralFooter />
        </>
      )
}

export default ProfileRecruiterPage