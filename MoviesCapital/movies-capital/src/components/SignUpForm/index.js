import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import {BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'

import {
  SignupFormContainer,
  SignupFormCard,
  SignupWebsiteLogo,
  SignupInputLabel,
  SignupInput,
  SignupButton,
  SignupErrorMsg,
  SignupSection,
  InputContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class SignupForm extends Component {
  state = {
    inputUsername: '',
    inputPassword: '',
    showPassword: false,
    showErrorMsg: false,
    loginErrorMsg: '',
  }

  onChangeUsername = event => this.setState({inputUsername: event.target.value})

  onChangePassword = event => this.setState({inputPassword: event.target.value})

  onClickShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  onSubmitSignup = async (event, getFavouriteMovies) => {
    event.preventDefault()
    const {inputUsername, inputPassword} = this.state
    const userDetails = {username: inputUsername, password: inputPassword}
    const apiUrl = 'http://localhost:4005/register/'
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      getFavouriteMovies()
      history.replace('/popular')
    } else {
      this.setState({showErrorMsg: true, loginErrorMsg: data.error_msg})
    }
  }

  render() {
    const {
      inputUsername,
      inputPassword,
      showPassword,
      showErrorMsg,
      loginErrorMsg,
    } = this.state
    const passwordType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/popular" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {getFavouriteMovies} = value
          return (
            <SignupFormContainer>
              <SignupFormCard
                type="submit"
                onSubmit={event => {
                  this.onSubmitSignup(event, getFavouriteMovies)
                }}
              >
                <SignupWebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="login website logo"
                />
                <SignupInputLabel htmlFor="username">USERNAME</SignupInputLabel>
                <InputContainer>
                  <SignupInput
                    id="username"
                    placeholder="Username"
                    value={inputUsername}
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <SignupInputLabel htmlFor="password">PASSWORD</SignupInputLabel>
                <InputContainer>
                  <SignupInput
                    id="password"
                    placeholder="Password"
                    value={inputPassword}
                    onChange={this.onChangePassword}
                    type={passwordType}
                  />
                  {showPassword ? (
                    <BsEyeSlashFill onClick={this.onClickShowPassword} />
                  ) : (
                    <BsEyeFill onClick={this.onClickShowPassword} />
                  )}
                </InputContainer>
                {showErrorMsg && (
                  <SignupErrorMsg>*{loginErrorMsg}</SignupErrorMsg>
                )}
                <SignupButton type="submit">Sign Up</SignupButton>
                <SignupSection>
                  Already have an account ?
                  <Link className="link-element" to="/login">
                    Log in
                  </Link>
                </SignupSection>
              </SignupFormCard>
            </SignupFormContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SignupForm
