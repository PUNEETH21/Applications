import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiOutlineSearch} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
import {FaBookmark} from 'react-icons/fa'
import {format} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Navbar from '../Navbar'
import ErrorView from '../ErrorView'
import LoaderView from '../LoaderView'

import {
  BgContainer,
  NavbarAndContentContainer,
  NavbarDisplayContainer,
  PopularMoviesContainer,
  PopularMoviesCardContainer,
  MoviesSearchContainer,
  MoviesSearchInput,
  MoviesSearchButton,
  NoMoviesHeading,
  NoMoviesDescription,
  NoMoviesRetryBtn,
  NoSearchMoviesContainer,
  NoSearchMoviesImg,
  PopularMoviesListContainer,
  PopularMovieContainer,
  MovieImg,
  MovieDetailsContainer,
  MovieStatsContainer,
  MovieRatingAndReleaseDetailsContainer,
  ReleaseDateText,
  RatingContainer,
  RatingCount,
  MovieTitle,
  MovieDescription,
  FavouriteButton,
  FavouriteText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noSearchMovies: 'NO_SEARCH_Movies',
}

const activeTab = 'POPULAR'

class PopularMovies extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    inputSearch: '',
    movies: [],
    darkTheme: false,
  }

  componentDidMount() {
    this.getPopularMovies()
  }

  getTheme = darkThemeValue => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        if (darkThemeValue !== darkTheme) this.setState({darkTheme})
      }}
    </ThemeContext.Consumer>
  )

  getPopularMovies = async () => {
    try {
      this.setState({apiStatus: apiStatusConstants.inProgress})
      const apiUrl = `http://localhost:4005/movies/popular`
      const response = await fetch(apiUrl)
      const data = await response.json()
      if (response.ok) {
        const moviesData = data.map(eachMovie => ({
          backdropPath: `https://image.tmdb.org/t/p/original${eachMovie.backdrop_path}`,
          id: eachMovie.id,
          overview: eachMovie.overview,
          releaseDate: eachMovie.release_date,
          title: eachMovie.title,
          voteAverage: eachMovie.vote_average,
        }))
        this.setState({
          movies: moviesData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderPopularMoviesSuccessView()
      case apiStatusConstants.noSearchMovies:
        return this.renderNoSearchMoviesFoundView()
      case apiStatusConstants.failure:
        return <ErrorView tryAgain={this.getPopularMovies} />
      default:
        return null
    }
  }

  getFilteredMovies = () => {
    const {inputSearch, movies, apiStatus} = this.state
    const filteredMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(inputSearch.toLowerCase()) === true,
    )
    if (filteredMovies.length === 0) {
      this.setState({apiStatus: apiStatusConstants.noSearchMovies})
    } else if (
      filteredMovies.length > 0 &&
      apiStatus !== apiStatusConstants.success
    ) {
      this.setState({apiStatus: apiStatusConstants.success})
    }
    return filteredMovies
  }

  renderPopularMoviesSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {onClickFavouriteMovie, favouriteMovies} = value
        const favouriteMoviesIds = favouriteMovies.map(movie => movie.id)
        const {darkTheme} = this.state
        const movies = this.getFilteredMovies()
        console.log('fav_mov', favouriteMovies)
        return (
          <PopularMoviesListContainer>
            {movies.map(movie => {
              const onClickMovieContainer = () => {
                const {history} = this.props
                history.replace(`/movie/${movie.id}`)
              }

              const isFavouriteMovie = favouriteMoviesIds.includes(movie.id)
              const favouriteText = isFavouriteMovie
                ? 'Favourited'
                : 'Favourite'
              const favouriteColor = isFavouriteMovie ? '#2563eb' : '#64748b'

              const onClickFavourite = () => {
                const jwtToken = Cookies.get('jwt_token')
                if (jwtToken === undefined) {
                  const {history} = this.props
                  history.push('/login')
                } else {
                  onClickFavouriteMovie(movie)
                }
              }

              return (
                <PopularMovieContainer>
                  <MovieImg
                    src={movie.backdropPath}
                    alt="movie thumbnail"
                    onClick={onClickMovieContainer}
                  />
                  <MovieDetailsContainer>
                    <MovieTitle darkTheme={darkTheme}>{movie.title}</MovieTitle>
                    <MovieDescription darkTheme={darkTheme}>
                      {movie.overview}
                    </MovieDescription>
                    <MovieStatsContainer>
                      <MovieRatingAndReleaseDetailsContainer>
                        <RatingContainer>
                          <AiFillStar color="yellow" />
                          <RatingCount>{movie.voteAverage}</RatingCount>
                        </RatingContainer>
                        <ReleaseDateText>
                          {format(new Date(movie.releaseDate), 'dd MMM yyyy')}
                        </ReleaseDateText>
                      </MovieRatingAndReleaseDetailsContainer>
                      <FavouriteButton onClick={onClickFavourite}>
                        <FaBookmark color={favouriteColor} />
                        <FavouriteText color={favouriteColor}>
                          {favouriteText}
                        </FavouriteText>
                      </FavouriteButton>
                    </MovieStatsContainer>
                  </MovieDetailsContainer>
                </PopularMovieContainer>
              )
            })}
          </PopularMoviesListContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderNoSearchMoviesFoundView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NoSearchMoviesContainer>
            <NoSearchMoviesImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no Movies"
            />
            <NoMoviesHeading darkTheme={darkTheme}>
              No Search results found
            </NoMoviesHeading>
            <NoMoviesDescription darkTheme={darkTheme}>
              Try different key words or remove search filter
            </NoMoviesDescription>
            <NoMoviesRetryBtn onClick={this.getPopularMovies}>
              Retry
            </NoMoviesRetryBtn>
          </NoSearchMoviesContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const {inputSearch} = this.state
          this.state.darkTheme = darkTheme
          const onChangeMoviesSearchInput = event =>
            this.setState(
              {inputSearch: event.target.value},
              this.getFilteredMovies,
            )

          return (
            <BgContainer>
              <Header />
              <NavbarAndContentContainer>
                <NavbarDisplayContainer>
                  <Navbar activeTab={activeTab} />
                </NavbarDisplayContainer>
                <PopularMoviesContainer darkTheme={darkTheme}>
                  <PopularMoviesCardContainer>
                    <MoviesSearchContainer darkTheme={darkTheme}>
                      <MoviesSearchInput
                        type="search"
                        placeholder="Search"
                        value={inputSearch}
                        onChange={onChangeMoviesSearchInput}
                        darkTheme={darkTheme}
                      />
                      <MoviesSearchButton darkTheme={darkTheme}>
                        <HiOutlineSearch />
                      </MoviesSearchButton>
                    </MoviesSearchContainer>
                    {this.renderApiStatus()}
                  </PopularMoviesCardContainer>
                </PopularMoviesContainer>
              </NavbarAndContentContainer>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default PopularMovies
