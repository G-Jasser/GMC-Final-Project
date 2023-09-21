import React from 'react'
import { NavbarLandingPage } from './NavbarLandingPageUnsigned'
import { LoginSection } from './LoginSection'
import { GeneralFooter } from './GeneralFooter'

const LoginPage = () => {
  return (
    <>
        <NavbarLandingPage/>
        <LoginSection/>
        <GeneralFooter/>
    </>
  )
}

export default LoginPage