import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
`

export const NavbarAndContentContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-grow: 1;
`

export const NavbarDisplayContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  align-self: stretch;
  padding: 2%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f4f4f4')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const NotFoundImg = styled.img`
  width: 95%;
  max-width: 450px;
  margin-bottom: 10px;
`

export const NotFoundHeading = styled.h1`
  font-weight: 500;
`

export const NotFoundDescription = styled.p`
  margin-top: 0px;
  color: #64748b;
`
