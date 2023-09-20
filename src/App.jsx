import { FindDreamSection } from './components/FindDreamSection'
import { GeneralFooter } from './components/GeneralFooter'
import JobBrowserPage from './components/JobBrowserPage'
import { JobCategoriesSection } from './components/JobCategoriesSection'
import { JobSearchSection } from './components/JobSearchSection'
import LandingPage from './components/LandingPage'
import { NavbarLandingPage } from './components/NavbarLandingPageUnsigned'

function App() {
  return (
    <>
      <NavbarLandingPage />
      <FindDreamSection />
      <JobCategoriesSection />
      <JobSearchSection />
      <GeneralFooter />
    </>
  )
}

export default App
