import React from 'react'
import { NavbarSignedRecruiter } from "./Navbars"
import { PostedJobsSection } from './PostListingSection'
import { ReceivedAppSection } from './ReceivedAppSection'
import { GeneralFooter } from './GeneralFooter'

const PostedJobsPage = () => {
  return (
    <>
        <NavbarSignedRecruiter/>
        <PostedJobsSection/>
        <ReceivedAppSection/>
        <GeneralFooter/>
    </>
  )
}

export default PostedJobsPage