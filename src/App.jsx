import { GeneralFooter } from './components/FooterGeneral'
import { LoginPage } from './components/LoginPage'
import { NavbarLandingPage } from './components/NavbarLandingPageUnsigned'
import { NavbarSignedRecruiter } from './components/NavbarSignedRecruiter'
import { NavbarSignedSeeker } from './components/NavbarSignedSeeker'
import { NavbarUnsigned } from './components/NavbarUnsigned'

function App() {
  return (
    <>
      <NavbarSignedSeeker/>
      <LoginPage/>
      <GeneralFooter/>
    </>
  )
}

export default App
