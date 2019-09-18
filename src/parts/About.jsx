import React from 'react'
import styled from 'styled-components'
import headShot from './global/images/headshot.jpg'
import Certification from './global/images/svgs/Certification'
import SignUp from './SignUp'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    flex-direction: row;
    align-items: flex-start;
  }
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    max-width: 900px;
    margin: 0 auto;
  }
`
const HeadShot = styled.img`
  width: 200px;
  border: 5px solid ${props => props.theme.accentSecondary};
  border-radius: 4px;
  margin: 20px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    width: 30%;
  }
`
const TextContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    width: 60%;
   }
`
const AboutHeader = styled.h2`
  font-family: ${props => props.theme.fontTitle};
  font-size: 16px;
  text-align: left;
  margin-block-end: unset;
  margin-block-start: unset;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 20px;
  }
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    font-size: 24px;
  }
`
const AboutMain = styled.div`
  font-family: ${props => props.theme.fontBasic};
  font-size: 16px;
  margin-bottom: 30px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 16px;
  }
`
const CertificationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`

const Certifications = styled.div`
  background-color: ${props => props.theme.accentPop};
  padding: 10px;
`

const CertificationGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 800px;
  align-items: center;
  padding: 20px 10px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-around;
  }
`

const CertificationHeader = styled(AboutHeader)`
  color: ${props => props.theme.fontMain};
  text-align: center;
`
const CertificationCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.accentSecondary};
  padding: 10px;
  border-radius: 50%;
  margin-right: 10px;
`
const CertificationTitle = styled.p`
  font-family: ${props => props.theme.fontBasic};
  font-size: 16px;
  color: ${props => props.theme.fontMain};
  margin-left: 10px;
`

const About = () => {
  let certificates = [
    'Certified Personal Trainer',
    'Fitness Nutrition Specialist',
    'Senior Fitness Specialist (Pursuing)',
    'OHS Assistant Wrestling Coach/Trainer'
  ]
  return (
    <>
      <AboutContainer id={'about'}>
        <HeadShot src={headShot} />
        <TextContainer>
          <AboutHeader>ABOUT : PRIMAL ROOTS</AboutHeader>
          <AboutMain>
            <p>
              First off, welcome! I’m grateful that you’ve checked out our page and have taken time out of your busy
              schedule to research what we’re all about here at Primal Roots.
            </p>
            <p>
              I’m Audrey, a full time Associate Paralegal, CrossFit and fitness enthusiast, longtime athlete, and
              Certified Personal Trainer. I’ve always had an affinity for being outside, playing sports and more than
              anything finding a way to help others. I know the difficulty of getting into a gym on a busy schedule, the
              issue with sharing a limited amount of equipment with hundreds of other people and the importance of
              health and fitness, yet the vital need for a healthy balance.
            </p>
            <p>
              Primal Roots Personal Training was found on the ideals that health and fitness should never be a chore, an
              activity that causes you to choose between spending time with your kids, significant others, friends, or
              your health, and a situation in which leaves you feeling vulnerable, uncomfortable or self conscious in a
              typical gym environment. We are here to tailor a program for you and your life. We want to make this a
              health and fitness journey that is sustainable, fun, interactive and informative. Heck, we want you to be
              excited for your session and for the sweat that ensues!
            </p>
            <p>
              Not convinced? Reach out, ask questions, and try us out for a free session. We offer at-home personal
              training sessions on evenings and weekends and remote personal training as well. Don’t see a package that
              fits your busy schedule? We will do our best to personalize one for you! We know time is valuable, so
              thank you for checking us out and we hope to see you soon!
            </p>
          </AboutMain>
          <SignUp />
        </TextContainer>
      </AboutContainer>
      <Certifications>
        <CertificationHeader>EXPERIENCE</CertificationHeader>
        <CertificationGroup>
          {certificates.map((certificate, idx) => {
            return (
              <CertificationContainer key={idx}>
                <CertificationCircle>
                  <Certification />
                </CertificationCircle>
                <CertificationTitle>{certificate}</CertificationTitle>
              </CertificationContainer>
            )
          })}
        </CertificationGroup>
      </Certifications>
    </>
  )
}

export default About
