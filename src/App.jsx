import { GeneralFooter } from './components/FooterGeneral'
import { JobCard } from './components/JobCard'
import { LoginPage } from './components/LoginPage'
import { NavbarLandingPage } from './components/NavbarLandingPageUnsigned'
import { NavbarSignedRecruiter } from './components/NavbarSignedRecruiter'
import { NavbarSignedSeeker } from './components/NavbarSignedSeeker'
import { NavbarUnsigned } from './components/NavbarUnsigned'
import { SignUpRecruiter } from './components/SignUpRecruiter'
import { SignUpSeeker } from './components/SignUpSeeker'

function App() {
  return (
    <>
      <NavbarSignedSeeker/>
      <JobCard/>
      <LoginPage/>
      <GeneralFooter/>
    </>
  )
}

export default App
