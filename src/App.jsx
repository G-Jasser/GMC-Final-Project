import { GeneralFooter } from './components/FooterGeneral'
import { NavbarLandingPage } from './components/NavbarLandingPageUnsigned'
import { NavbarSignedRecruiter } from './components/NavbarSignedRecruiter'
import { NavbarSignedSeeker } from './components/NavbarSignedSeeker'
import { NavbarUnsigned } from './components/NavbarUnsigned'

function App() {
  return (
    <>
      <NavbarSignedSeeker/>
      <div style={{height:"50vh"}}>
      <GeneralFooter/>
      </div>
    </>
  )
}

export default App
