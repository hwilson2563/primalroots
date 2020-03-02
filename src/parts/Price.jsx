import React from 'react'
import styled from 'styled-components'

const Packages = styled.div`
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
`
const PackageHeader = styled.h2`
  font-family: ${props => props.theme.fontTitle};
  font-size: 16px;
  text-align: left;
  margin-block-end: unset;
  margin-block-start: unset;
  margin-bottom: 20px;
  padding: 20px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 20px;
  }
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    font-size: 24px;
  }
`
const Package = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const PackageTitle = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  margin: 0 20px;
`
const Title = styled.h3`
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

const Descript = styled.p`
  margin: 10px 30px;
  font-family: ${props => props.theme.fontBasic};
  font-size: 14px;
  margin-bottom: 30px;
  max-width: 500px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 16px;
  }
`
const Pricing = styled(Title)``
const PackageInclude = styled(Descript)`
  max-width: unset;
`

const Price = () => {
  const packages = [
    {
      title: 'Package One',
      price: '$240.00',
      description: '4 sessions (Introductory Rate!) (Sessions must be used within 4-weeks)'
    },
    { title: 'Package Two', price: '$360.00 ', description: '6 sessions (Sessions must be used within 6-weeks)' },
    { title: 'Package Three', price: '$600.00 ', description: '10 sessions (Sessions must be used within 12-weeks)' },
    {
      title: 'Package Four',
      price: 'Rates vary',
      description: 'Busy schedule? Contact Primal Roots to tailor a package to your needs.'
    }
  ]
  return (
    <Packages id={'price'}>
      <PackageHeader>PACKAGES</PackageHeader>
      <PackageInclude>
        Services are offered throughout the Northern Virginia area.<br/>
        At-home personal training (1-on-1) packages include: <strong>FREE</strong> first time consultations! Equipment
        is brought to you, including (but not limited to) wallballs, kettlebells, dumbbells, barbells, plates, ab mats,
        and plyoboxes. Remote programming options are also available.
      </PackageInclude>
      {packages.map((packageGroup, idx) => {
        return (
          <Package key={idx}>
            <PackageTitle>
              <Title>{packageGroup.title}</Title>
              <Pricing>{packageGroup.price}</Pricing>
            </PackageTitle>
            <Descript>{packageGroup.description}</Descript>
          </Package>
        )
      })}
     <PackageInclude>
        **A small fee may be incurred for those living outside of the Northern Virginia area.
     </PackageInclude>
    </Packages>
  )
}

export default Price
