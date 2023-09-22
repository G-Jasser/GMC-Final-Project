import React from 'react'
import { NavbarSignedRecruiter } from "./Navbars"
import { EditPostSection } from './NewPostSection'
import { GeneralFooter } from './GeneralFooter'

const EditPostPage = () => {
  return (
    <>
        <NavbarSignedRecruiter />
        <EditPostSection />
        <GeneralFooter />
    </>
  )
}

export default EditPostPage