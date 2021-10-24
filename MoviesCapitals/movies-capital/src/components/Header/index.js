import {FaMoon} from 'react-icons/fa'
import {WiDaySunny} from 'react-icons/wi'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FiLogOut, FiLogIn} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderOptionsContainer,
  ThemeButton,
  UserProfile,
  LogoutButton,
  PopupBgContainer,
  PopupContainer,
  PopupNavbarBgContainer,
  LogoutDescription,
  ButtonsContainer,
  CancelBtn,
  ConfirmBtn,
  CloseBtn,
  NavbarBgContainer,
  NavbarCardContainer,
  IconContainer,
  NavbarDisplayContainer,
  BtnContainer,
} from './styledComponents'
import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, onClickTheme} = value
      const headerLogoImg = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const onClickLogin = () => {
        const {history} = props
        history.replace('/login')
      }

      const jwtToken = Cookies.get('jwt_token')
      const isLoggedIn = jwtToken !== undefined

      return (
        <>
          <HeaderContainer darkTheme={darkTheme}>
            <Link to="/">
              <HeaderLogo src={headerLogoImg} alt="website logo" />
            </Link>
            <HeaderOptionsContainer>
              <ThemeButton data-testid="theme" onClick={() => onClickTheme()}>
                {darkTheme ? (
                  <WiDaySunny className="day-img" color="#ffffff" />
                ) : (
                  <FaMoon size="" />
                )}
              </ThemeButton>
              <UserProfile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <NavbarDisplayContainer darkTheme={darkTheme}>
                    <GiHamburgerMenu size="20" />
                  </NavbarDisplayContainer>
                }
              >
                {close => (
                  <PopupNavbarBgContainer darkTheme={darkTheme}>
                    <CloseBtn
                      darkTheme={darkTheme}
                      type="button"
                      onClick={() => close()}
                    >
                      <IoMdClose size="30" />
                    </CloseBtn>

                    <NavbarBgContainer>
                      <NavbarCardContainer>
                        <Navbar alignCenter={`${true}`} />
                      </NavbarCardContainer>
                    </NavbarBgContainer>
                  </PopupNavbarBgContainer>
                )}
              </Popup>

              {!isLoggedIn && (
                <BtnContainer onClick={onClickLogin}>
                  <LogoutButton darkTheme={darkTheme}>Login</LogoutButton>
                  <IconContainer darkTheme={darkTheme}>
                    <FiLogIn size="20" />
                  </IconContainer>
                </BtnContainer>
              )}

              {isLoggedIn && (
                <Popup
                  modal
                  trigger={
                    <div>
                      <LogoutButton darkTheme={darkTheme}>Logout</LogoutButton>
                      <IconContainer darkTheme={darkTheme}>
                        <FiLogOut size="20" />
                      </IconContainer>
                    </div>
                  }
                >
                  {close => (
                    <PopupBgContainer darkTheme={darkTheme}>
                      <PopupContainer darkTheme={darkTheme}>
                        <LogoutDescription>
                          Are you sure, you want to logout
                        </LogoutDescription>

                        <ButtonsContainer>
                          <CancelBtn type="button" onClick={() => close()}>
                            Cancel
                          </CancelBtn>

                          <ConfirmBtn type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmBtn>
                        </ButtonsContainer>
                      </PopupContainer>
                    </PopupBgContainer>
                  )}
                </Popup>
              )}
            </HeaderOptionsContainer>
          </HeaderContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
