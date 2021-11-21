import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Navbar from '../Navbar'
import {
  BgContainer,
  NavbarAndContentContainer,
  NavbarDisplayContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const lightImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

const darkImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const imgUrl = darkTheme ? darkImg : lightImg
      return (
        <BgContainer>
          <Header />
          <NavbarAndContentContainer>
            <NavbarDisplayContainer>
              <Navbar />
            </NavbarDisplayContainer>
            <NotFoundContainer darkTheme={darkTheme}>
              <NotFoundImg src={imgUrl} alt="not found" />
              <NotFoundHeading>Page Not Found</NotFoundHeading>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </NavbarAndContentContainer>
        </BgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
