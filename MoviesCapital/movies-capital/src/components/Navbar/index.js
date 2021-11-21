import {AiFillStar} from 'react-icons/ai'
import {HiTrendingUp} from 'react-icons/hi'
import {FaFireAlt} from 'react-icons/fa'

import {withRouter, Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  NavbarContainer,
  NavbarListItemsContainer,
  NavbarListItemContainer,
  NavLinkContent,
  ContactSection,
  ContactTitle,
  SocialMediaSection,
  SocialMediaIcon,
  ContactDescription,
  LinkElement,
} from './styledComponents'
import './index.css'

const Navbar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {alignCenter, activeTab} = props

      return (
        <NavbarContainer alignCenter={alignCenter} darkTheme={darkTheme}>
          <NavbarListItemsContainer alignCenter={alignCenter}>
            <NavbarListItemContainer
              activeTab={activeTab === 'POPULAR'}
              darkTheme={darkTheme}
              alignCenter={alignCenter}
            >
              <HiTrendingUp
                color={activeTab === 'POPULAR' ? '#ff0000' : '#606060'}
              />
              <Link to="/popular" className="nav-link-content">
                <NavLinkContent darkTheme={darkTheme}>Popular</NavLinkContent>
              </Link>
            </NavbarListItemContainer>
            <NavbarListItemContainer
              activeTab={activeTab === 'LATEST'}
              darkTheme={darkTheme}
              alignCenter={alignCenter}
            >
              <FaFireAlt
                color={activeTab === 'LATEST' ? '#ff0000' : '#606060'}
              />
              <Link to="/latest" className="nav-link-content">
                <NavLinkContent darkTheme={darkTheme}>Latest</NavLinkContent>
              </Link>
            </NavbarListItemContainer>
            <NavbarListItemContainer
              activeTab={activeTab === 'FAVOURITE'}
              darkTheme={darkTheme}
              alignCenter={alignCenter}
            >
              <AiFillStar
                color={activeTab === 'FAVOURITE' ? '#ff0000' : '#606060'}
              />
              <Link to="/favourites" className="nav-link-content">
                <NavLinkContent darkTheme={darkTheme}>Favourite</NavLinkContent>
              </Link>
            </NavbarListItemContainer>
          </NavbarListItemsContainer>
          <ContactSection>
            <ContactTitle>CONTACT US</ContactTitle>
            <SocialMediaSection>
              <LinkElement
                as="a"
                href="https://www.facebook.com/themoviedb/"
                target="_blank"
              >
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                  alt="facebook logo"
                />
              </LinkElement>
              <LinkElement
                as="a"
                href="https://www.twitter.com/themoviedb/"
                target="_blank"
              >
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
              </LinkElement>
              <LinkElement
                as="a"
                href="https://www.linkedin.com/company/themoviedb.org/about/"
                target="_blank"
              >
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  alt="linked in logo"
                />
              </LinkElement>
            </SocialMediaSection>
            <ContactDescription>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactSection>
        </NavbarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
