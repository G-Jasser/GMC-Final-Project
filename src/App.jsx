import { AppliedToJobsSection } from './components/AppliedToJobsSection'
import { FindDreamSection } from './components/FindDreamSection'
import { GeneralFooter } from './components/GeneralFooter'
import JobBrowserPage from './components/JobBrowserPage'
import { JobCategoriesSection } from './components/JobCategoriesSection'
import { JobSearchSection } from './components/JobSearchSection'
import LandingPage from './components/LandingPage'
import { NavbarSignedRecruiter } from './components/NavbarSignedRecruiter'
import { PostedJobsSection } from './components/PostedJobsSection'
import { ProfileSeekerMainSec } from './components/ProfileSeekerMainSec'
import ProfileSeekerPage from './components/ProfileSeekerPage'

function App() {
  return (
    <>
      <NavbarSignedRecruiter/>
      <PostedJobsSection />
      <GeneralFooter />
    </>
  )
}

export default App
