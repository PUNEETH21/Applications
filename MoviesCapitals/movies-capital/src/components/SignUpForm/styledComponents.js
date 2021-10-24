import styled from 'styled-components'

export const SignupFormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignupFormCard = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-shadow: 0px 0px 10px black;
  width: 400px;
`

export const SignupWebsiteLogo = styled.img`
  width: 160px;
  align-self: center;
  margin-bottom: 20px;
`

export const SignupInputLabel = styled.label`
  margin-top: 20px;
`

export const SignupInput = styled.input`
  border: none;
  outline: none;
`

export const SignupErrorMsg = styled.p`
  color: #ff0000;
  padding: 0px;
  margin: 0px;
`

export const SignupButton = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 6px;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 20px;
`

export const SignupSection = styled.p``

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-radius: 2px;
  padding: 10px;
`
