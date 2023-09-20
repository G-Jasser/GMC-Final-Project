import React from 'react'
import { NavbarLandingPage } from './NavbarLandingPageUnsigned'
import { LandingPageMainSection } from './LandingPageMainSection'
import { WhyUs } from './WhyUs'
import { BenefitsSection } from './BenefitsSection'
import { GeneralFooter } from './FooterGeneral'

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