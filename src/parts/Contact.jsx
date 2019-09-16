import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  font-family: ${props => props.theme.fontBasic};
  font-size: 14px;
  background-color:rgba(66,122,161, .8);
  p {
    margin-left: 10px;
    margin-block-start: unset;
    margin-block-end: unset;
  }
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 16px;
  }
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    margin: 0 auto;
  }
`
const Header = styled.h2`
  font-family: ${props => props.theme.fontTitle};
  font-size: 16px;
  text-align: left;
  margin-block-end: unset;
  margin-block-start: unset;
  margin: 10px 5px;
  padding: 10px 0px;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 20px;
  }
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    font-size: 24px;
  }
`
const FormContainer = styled.div`
  max-width: 900px;
  @media screen and (min-width: ${props => props.theme.desktop}px) {
    margin: 0 auto;
  }
 `
const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Name = styled.input`
  font-family: ${props => props.theme.fontBasic};
  font-size: 14px;
  padding: 5px;
  margin: 10px;
  border-radius: 4px;
  border: 2px solid ${props => props.theme.accentSecondary};
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 16px;
  }
   @media screen and (min-width: ${props => props.theme.desktop}px) {
    min-width: 900px;
  }
`
const Message = styled(Name)`
  min-height: 200px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    min-height: 300px;
  }
`
const Send = styled.button`
  color: ${props => props.theme.fontMain};
  font-size: 14px;
  font-family: ${props => props.theme.fontBasic};
  background-color: ${props => props.theme.accentPrimary};
  padding: 10px;
  width: auto;
  border: unset;
  border-radius: 4px;
  margin: 10px;
  box-shadow:1px 1px 3px ${props => props.theme.fontSecondary};
  cursor: pointer;
  :hover {
    box-shadow:1px 1px 5px ${props => props.theme.fontSecondary};
  }
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    font-size: 16px;
    width: 150px;
    align-self: flex-end;
  }
`

const Contact = () => {
  const action = `https://formspree.io/primalroots.pt@gmail.com`

  return (
    <ContactContainer className={'contact-container'}>
      <FormContainer className={'contact-form'}>
      <Header id={'contact'}>CONTACT ME</Header>
      <p>Have questions? Reach out today!</p>
      <ContactForm action={action} method='POST'>
        <Name type={'email'} name={'_relpyto'} placeholder={'Enter your email'} />
        <Message as={'textarea'} name={'message'} placeholder={'Enter your message'} />
        <Send type={'submit'} aria-label={'submit'}>SEND</Send>
      </ContactForm>
      </FormContainer>
    </ContactContainer>
  )
}
export default Contact
