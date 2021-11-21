import {Component} from 'react'
import Cookies from 'js-cookie'
import {Switch, Route, Redirect} from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import PopularMovies from './components/PopularMovies'
import LatestMovie from './components/LatestMovie'
import Favourites from './components/Favourites'
import MovieDetails from './components/MovieDetails'
import ThemeContext from './context/ThemeContext'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {darkTheme: false, favouriteMovies: []}

  componentDidMount() {
    this.getFavouriteMovies()
  }

  getFavouriteMovies = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'http://localhost:4005/favourites'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log(apiUrl, data, 222)
      const {moviesDetails} = data
      const favouriteMovies = moviesDetails.map(movie => ({
        id: movie.id,
        backdropPath: movie.backdrop_path,
        title: movie.title,
        overview: movie.overview,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
      }))
      this.setState({favouriteMovies})
    }
  }

  onClickFavouriteMovie = async movieDetails => {
    const {favouriteMovies} = this.state
    const movieId = movieDetails.id
    const isThere = favouriteMovies.some(movie => movie.id === movieId)
    const jwtToken = Cookies.get('jwt_token')
    let updatedMovies
    if (isThere === true) {
      const url = `http://localhost:4005/unfavourite/${movieId}`
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      await fetch(url, options)
      updatedMovies = favouriteMovies.filter(movie => movie.id !== movieId)
    } else {
      const url = 'http://localhost:4005/movie/favourite'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({movieDetails}),
      }
      await fetch(url, options)
      updatedMovies = [...favouriteMovies, movieDetails]
    }
    this.setState({favouriteMovies: updatedMovies})
  }

  onClickTheme = () =>
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))

  render() {
    const {darkTheme, favouriteMovies} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          onClickTheme: this.onClickTheme,
          favouriteMovies,
          onClickFavouriteMovie: this.onClickFavouriteMovie,
          getFavouriteMovies: this.getFavouriteMovies,
        }}
      >
        <Switch>
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/popular" component={PopularMovies} />
          <Route exact path="/latest" component={LatestMovie} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/movie/:movieId" component={MovieDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
