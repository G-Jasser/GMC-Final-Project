import { FindDreamSection } from './components/FindDreamSection'
import { GeneralFooter } from './components/FooterGeneral'
import { JobCategoriesSection } from './components/JobCategoriesSection'
import LandingPage from './components/LandingPage'
import { NavbarLandingPage } from './components/NavbarLandingPageUnsigned'

function App() {
  return (
    <>
      <NavbarLandingPage/>
      <FindDreamSection/>
      <JobCategoriesSection/>
      <GeneralFooter/>
    </>
  )
}

export default App
