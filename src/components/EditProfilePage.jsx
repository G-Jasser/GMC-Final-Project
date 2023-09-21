import React from 'react'
import { NavbarSignedSeeker } from "./Navbars"
import { EditProfileSection } from './EditProfileSection'
import { GeneralFooter } from './GeneralFooter'

const EditProfilePage = () => {
    return (
        <>
            <NavbarSignedSeeker />
            <EditProfileSection />
            <GeneralFooter />
        </>
    )
}

export default EditProfilePage