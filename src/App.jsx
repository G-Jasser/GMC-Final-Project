import { ApplicationCard } from './components/ApplicantCard'
import { GeneralFooter } from './components/FooterGeneral'
import { JobCard } from './components/JobCard'
import { JobCardForRecruiter } from './components/JobCardForRecruiter'
import { JobCardForSeeker } from './components/JobCardForSeeker'
import { JobSearchBar } from './components/JobSearchBar'
import { LandingPageMainSection } from './components/LandingPageMainSection'
import { LoginPage } from './components/LoginPage'
import { NavbarLandingPage } from './components/NavbarLandingPageUnsigned'
import { NavbarSignedRecruiter } from './components/NavbarSignedRecruiter'
import { NavbarSignedSeeker } from './components/NavbarSignedSeeker'
import { NavbarUnsigned } from './components/NavbarUnsigned'
import { SignUpRecruiter } from './components/SignUpRecruiter'
import { SignUpSeeker } from './components/SignUpSeeker'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <>
      <NavbarSignedSeeker/>
      <LandingPageMainSection/>
      <WhyUs/>
      <JobCard/>
      <JobCardForSeeker/>
      <ApplicationCard/>
      <JobSearchBar/>
      <SignUpRecruiter/>
      <SignUpSeeker/>
      <LoginPage/>
      <GeneralFooter/>
    </>
  )
}

export default App
