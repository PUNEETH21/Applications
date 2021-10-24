import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //   padding-left: 55px;
  //   padding-right: 55px;
  //   padding-top: 20px;
  //   padding-bottom: 20px;
  padding: 25px;
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
`

export const HeaderLogo = styled.img`
  width: 120px;
  @media (max-width: 576px) {
    width: 80px;
  }
`

export const HeaderOptionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
`

export const UserProfile = styled.img`
  height: 25px;
  margin-left: 25px;
  margin-right: 25px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  padding-left: 10px;
  padding-right: 10px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#4f46e5')};
  border: 2px solid ${props => (props.darkTheme ? '#ffffff' : '#4f46e5')};
  border-radius: 2px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const PopupBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props =>
    props.darkTheme ? 'rgba(0, 20, 0, 0.5)' : 'rgba(221, 173, 117, 0.3)'};
  //   give opacity to bg color only 'rgba(221, 173, 117, 0.3)'
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#313131' : '#ffffff')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#313131')};
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 60px;
  padding-right: 60px;
  border-radius: 10px;
  margin: 20px;
  @media (max-width: 400px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const PopupNavbarBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
`

export const LogoutDescription = styled.p``

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  margin-top: 30px;
`

export const CancelBtn = styled.button`
  background-color: transparent;
  color: #94a3b8;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  font-weight: bold;
`

export const ConfirmBtn = styled(CancelBtn)`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
`

export const IconContainer = styled.div`
  margin-left: 25px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 576px) {
    margin-left: 15px;
  }
`

export const NavbarDisplayContainer = styled(IconContainer)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const CloseBtn = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 0px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const NavbarBgContainer = styled.div`
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const NavbarCardContainer = styled.div`
  align-self: stretch;
`

export const BtnContainer = styled.div``
