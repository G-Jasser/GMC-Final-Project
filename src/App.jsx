import { AppliedToJobsSection } from './components/AppliedToJobsSection'
import EditProfilePage from './components/EditProfilePage'
import { EditProfileSection } from './components/EditProfileSection'
import { FindDreamSection } from './components/FindDreamSection'
import { GeneralFooter } from './components/GeneralFooter'
import JobBrowserPage from './components/JobBrowserPage'
import { JobCategoriesSection } from './components/JobCategoriesSection'
import { JobSearchSection } from './components/JobSearchSection'
import LandingPage from './components/LandingPage'
import { NavbarSignedRecruiter } from './components/NavbarSignedRecruiter'
import { NavbarSignedSeeker } from './components/NavbarSignedSeeker'
import { NewPostSection } from './components/NewPostSection'
import { PostedJobsSection } from './components/PostedJobsSection'
import { ProfileRecruiterMainSec } from './components/ProfileRecruiterMainSec'
import { ProfileSeekerMainSec } from './components/ProfileSeekerMainSec'
import ProfileSeekerPage from './components/ProfileSeekerPage'
import { ReceivedAppSection } from './components/ReceivedAppSection'
import { RecruiterAboutUsSection } from './components/RecruiterAboutUsSection'
import PostedJobsPage from './components/PostedJobsPage';

function App() {
  return (
    <>
      <NavbarSignedSeeker/>
      <EditProfileSection/>
      <GeneralFooter />
      <PostedJobsPage/>
    </>
  )
}

export default App
