import React, { Component } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from './parts/global/globalStyles'

import NavMain from './parts/Nav'
import MainLogo from './parts/MainLogo'
import About from './parts/About'
import Contact from './parts/Contact'
import Price from './parts/Price'
import IconGallery from './parts/IconGallery'
import Media from './parts/Media'


const Header = styled.header`
background-color: ${props=>props.theme.secondBackground};
`

const MainBackground = styled.div`
  background-color: ${props => props.theme.background};
  padding-bottom: 10px;
  `
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <MainBackground className="App">
        <Media />
        <Header className="App-header">
          <NavMain/>
          <MainLogo/>
        </Header>
        <IconGallery />
        <About />
        <Contact />
        <Price />
      </MainBackground>
      </ThemeProvider>
    );
  }
}

export default App;
