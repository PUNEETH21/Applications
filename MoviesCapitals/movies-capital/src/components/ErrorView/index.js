import ThemeContext from '../../context/ThemeContext'
import {
  ErrorViewContainer,
  ErrorImg,
  ErrorHeading,
  ErrorDescription,
  RetryBtn,
} from './styledComponents'

const ErrorView = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {tryAgain} = props
      const url = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      return (
        <ErrorViewContainer darkTheme={darkTheme}>
          <ErrorImg src={url} alt="failure view" />
          <ErrorHeading darkTheme={darkTheme}>
            Oops! Something Went Wrong
          </ErrorHeading>
          <ErrorDescription>
            We are having some trouble to complete your request. Please try
            again.
          </ErrorDescription>
          <RetryBtn onClick={tryAgain}>Retry</RetryBtn>
        </ErrorViewContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default ErrorView
