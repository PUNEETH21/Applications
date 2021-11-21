import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const color = darkTheme ? '#ffffff' : '#4f46e5'
      return (
        <LoaderContainer darkTheme={darkTheme} data-testid="loader">
          <Loader type="ThreeDots" color={color} height="50" width="50" />
        </LoaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default LoaderView
