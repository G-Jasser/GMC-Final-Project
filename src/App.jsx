import { FindDreamSection } from './components/FindDreamSection'
import { GeneralFooter } from './components/GeneralFooter'
import JobBrowserPage from './components/JobBrowserPage'
import { JobCategoriesSection } from './components/JobCategoriesSection'
import { JobSearchSection } from './components/JobSearchSection'
import LandingPage from './components/LandingPage'
import { NavbarSignedSeeker } from './components/NavbarSignedSeeker'
import { ProfileSeekerMainSec } from './components/ProfileSeekerMainSec'

function App() {
  return (
    <>
      <NavbarSignedSeeker />
      <ProfileSeekerMainSec />
      <GeneralFooter />
    </>
  )
}

export default App
