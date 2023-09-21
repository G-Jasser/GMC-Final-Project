import React from 'react'
import { NavbarSignedRecruiter } from './NavbarSignedRecruiter'
import { NewPostSection } from './NewPostSection'
import { GeneralFooter } from './GeneralFooter'

const NewPostPage = () => {
  return (
    <>
        <NavbarSignedRecruiter />
        <NewPostSection />
        <GeneralFooter />
    </>
  )
}

export default NewPostPage