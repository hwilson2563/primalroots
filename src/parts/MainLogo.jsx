import React, { Fragment } from 'react'
import styled from 'styled-components'
import backgroundImg from './global/images/coverpage-01.png'
import logoImg from './global/images/logo.png'

const BackgroundContainer = styled.div`
  background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ), url(${props => props.backgroundImg});
  height: 300px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    height: 400px;
  }
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    height: 500px;
  }
`
const Logo = styled.div`
  background-image: url(${props => props.logoImg});
  height: 175px;
  width: 175px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow:rgba(0,0,0,.2) 3px 5px 5px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    height: 250px;
    width: 250px;
  }
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    height: 300px;
    width: 300px;
  }
`

const MainLogo = () => {
  return (
    <BackgroundContainer backgroundImg={backgroundImg}>
      <Logo logoImg={logoImg} />
    </BackgroundContainer>
  )
}

export default MainLogo
