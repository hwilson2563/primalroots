import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.fontMain};
  font-size: 14px;
  font-family: ${props => props.theme.fontBasic};
  background-color: ${props => props.theme.accentPrimary};
  padding: 10px;
  width: 100%;
  border: unset;
  border-radius: 4px;
  box-shadow: 1px 1px 3px ${props => props.theme.fontSecondary};
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 5px ${props => props.theme.fontSecondary};
  }
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 16px;
    width: 150px;
    float: right;
    margin-right: 10px;
  }
`
const SignUp = () => {
  return (
    <Button
      onClick={() => {
        window.open('https://www.surveymonkey.com/r/CVP9Z8T')
      }}>
      START TODAY!
    </Button>
  )
}
export default SignUp
