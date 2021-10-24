import styled from 'styled-components'

export const ErrorViewContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  align-items: center;
  //  padding: 100px;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f4f4f4')};
`

export const ErrorImg = styled.img`
  width: 60%;
  max-width: 300px;
`

export const ErrorHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
`

export const ErrorDescription = styled.p`
  color: #475569;
  text-align: center;
  line-height: 1.8;
`

export const LineBreak = styled.br``

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 5px;
  font-weight: bold;
`
