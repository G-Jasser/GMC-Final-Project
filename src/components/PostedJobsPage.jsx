import React from 'react'
import { NavbarSignedRecruiter } from './NavbarSignedRecruiter'
import { PostedJobsSection } from './PostedJobsSection'
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