import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  min-width: ${props => (props.alignCenter === 'true' ? '' : '220px')};
  max-width: ${props => (props.alignCenter === 'true' ? '' : '220px')};
  align-self: stretch;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  flex-grow: 1;
`

export const NavbarListItemsContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding-left: 0px;
`

export const NavbarListItemContainer = styled.li`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: ${props => (props.alignCenter === 'true' ? '40%' : '25px')};
  font-weight: ${props => (props.activeTab ? 500 : '')};
  ${props =>
    props.activeTab && {
      background: props.darkTheme ? '#424242' : '#e2e8f0',
    }}
`

export const NavLinkContent = styled.p`
  margin-left: 15px;
  margin-top: 13px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
`

export const ContactSection = styled.div`
  padding-left: 22px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const ContactTitle = styled.p`
  font-weight: bold;
`

export const SocialMediaSection = styled.div``

export const SocialMediaIcon = styled.img`
  height: 40px;
  margin-right: 12px;
`

export const ContactDescription = styled.p`
  font-weight: bold;
`

export const LinkElement = styled.a``
