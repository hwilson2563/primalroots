import React, { Fragment } from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
  width: auto;
  height: 30px;
  padding: 10px;
  background-color: ${props => props.theme.secondBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
     justify-content: flex-start;
     max-width: 900px;
     margin: 0 auto;
   }
`
const Navs = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Nav = styled.a`
  color: white;
  font-family: ${props => props.theme.fontBasic};
  padding: 0px 20px;
  margin: auto;
  border-right: ${props => (props.idx < 2 ? '1px solid white' : '')};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`

const NavMain = () => {
  const navs = ['about', 'price', 'contact']
  return (
    <NavContainer>
      <Navs>
        {navs.map((nav, idx) => {
          return (
            <Nav key={idx} idx={idx} href={'#' + nav}>
              {nav}
            </Nav>
          )
        })}
      </Navs>
    </NavContainer>
  )
}

export default NavMain
