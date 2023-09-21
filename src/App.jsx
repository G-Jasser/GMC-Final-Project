import { AppliedToJobsSection } from './components/AppliedToJobsSection'
import { FindDreamSection } from './components/FindDreamSection'
import { GeneralFooter } from './components/GeneralFooter'
import JobBrowserPage from './components/JobBrowserPage'
import { JobCategoriesSection } from './components/JobCategoriesSection'
import { JobSearchSection } from './components/JobSearchSection'
import LandingPage from './components/LandingPage'
import { NavbarSignedRecruiter } from './components/NavbarSignedRecruiter'
import { NewPostSection } from './components/NewPostSection'
import { PostedJobsSection } from './components/PostedJobsSection'
import { ProfileRecruiterMainSec } from './components/ProfileRecruiterMainSec'
import { ProfileSeekerMainSec } from './components/ProfileSeekerMainSec'
import ProfileSeekerPage from './components/ProfileSeekerPage'
import { ReceivedAppSection } from './components/ReceivedAppSection'
import { RecruiterAboutUsSection } from './components/RecruiterAboutUsSection'

function App() {
  return (
    <>
      <NavbarSignedRecruiter/>
      <NewPostSection/>
      <GeneralFooter />
    </>
  )
}

export default App
