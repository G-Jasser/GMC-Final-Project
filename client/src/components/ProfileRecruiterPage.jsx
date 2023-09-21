import React from 'react'
import { NavbarSignedRecruiter } from "./Navbars"
import { ProfileRecruiterMainSec } from "./ProfileMainSection"
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