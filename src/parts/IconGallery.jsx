import React from 'react'
import styled from 'styled-components'

import FitnessIcon from './global/images/svgs/FitnessIcon'
import MindIcon from './global/images/svgs/MindIcon'
import FoodIcon from './global/images/svgs/FoodIcon'

const IconsContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-around;
  max-width: 900px;
  margin: 0 auto;
`
const TxtIconContainer = styled.div`
  width: 100px;
  h3 {
    text-align: center;
    text-transform: uppercase;
    font-family: ${props => props.theme.fontTitle};
  }
`
const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.accentPrimary};
  border-radius: 100px;
  svg {
    width: 70%;
  }
`

const IconGallery = () => {
  const iconList = [
    { component: <FitnessIcon />, message: 'Fitness' },
    { component: <MindIcon />, message: 'Mindset' },
    { component: <FoodIcon />, message: 'Energy' }
  ]
  return (
    <IconsContainer>
      {iconList.map((icon, idx) => {
        return (
          <TxtIconContainer key={idx}>
            <IconContainer> {icon.component} </IconContainer>
            <h3>{icon.message}</h3>
          </TxtIconContainer>
        )
      })}
    </IconsContainer>
  )
}
export default IconGallery
