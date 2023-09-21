import React from 'react'
import { NavbarLandingPage } from "./Navbars"
import { LandingPageMainSection } from './LandingPageMainSection'
import { WhyUs } from './WhyUs'
import { BenefitsSection } from './BenefitsSection'
import { GeneralFooter } from './GeneralFooter'

const LandingPage = () => {
  return (
    <>
    <NavbarLandingPage/>
    <LandingPageMainSection/>
    <WhyUs/>
    <BenefitsSection/>
    <GeneralFooter/>
    </>
  )
}

export default LandingPage