import React from 'react'
import styled from 'styled-components'

import Facebook from './global/images/svgs/Facebook'
import Instagram from './global/images/svgs/Instagram'

const MediaContainer = styled.div`
  position: absolute;
  height: 40px;
  top: 300px;
  right: 0px;
  float: right;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: ${props => props.theme.accentPop};
  font-family: ${props => props.theme.fontBasic};
  a {
    padding: 0px 5px;
  }
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    top: 0px;
  }
`

const Media = () => {
  const mediaList = [
    { icon: <Facebook />, href: 'https://www.facebook.com/primalroots.personaltraining', label: 'facebook page' },
    { icon: <Instagram />, href: 'https://instagram.com/primalroots.pt?igshid=16ti30wsufi16', label: 'instagram' }
  ]
  return (
    <MediaContainer id={'media-container'}>
      Stay Connected!
      {mediaList.map((media, idx) => {
        return (
          <a href={media.href} aria-label={media.label} key={idx}>
            {media.icon}
          </a>
        )
      })}
    </MediaContainer>
  )
}
export default Media
