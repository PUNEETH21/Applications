import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiLike, BiDislike} from 'react-icons/bi'
import {FaBookmark} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
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
  MovieDetailsContainer,
  MovieDetailsCardContainer,
  LineBreak,
  MovieStatsAndOptionsContainer,
  MovieRatingAndReleaseDetailsContainer,
  ReleaseDate,
  MovieImg,
  MovieCardContentContainer,
  MovieCardDescription,
  MovieCardOptionsContainer,
  OptionContainer,
  IconButtonText,
  RatingContainer,
  RatingCount,
  MovieTitle,
  HomePage,
} from './styledComponents'

const activeTab = 'LATEST'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class LatestMovie extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    movieDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getLatestMovieDetails()
  }

  getLatestMovieDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    try {
      const apiUrl = `http://localhost:4005/movies/latest`
      const options = {
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok) {
        let poster
        if (data.backdrop_path === null) {
          if (data.poster_path === null) {
            poster =
              'https://media.dream13.com/wp-content/uploads/1979/03/Poster_missing.jpg'
          } else {
            poster = `https://image.tmdb.org/t/p/original${data.poster_path}`
          }
        } else {
          poster = `https://image.tmdb.org/t/p/original${data.backdrop_path}`
        }
        const movieDetails = {
          backdropPath: poster,
          id: data.id,
          overview: data.overview,
          releaseDate: data.release_date,
          title: data.title,
          voteAverage: data.vote_average,
          homepage: data.homepage,
        }
        this.setState({
          movieDetails,
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
        return this.renderMovieDetails()
      case apiStatusConstants.failure:
        return <ErrorView tryAgain={this.getLatestMovieDetails} />
      default:
        return null
    }
  }

  onClickLikedBtn = () =>
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))

  onClickDislikedBtn = () =>
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))

  renderMovieDetails = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme, favouriteMovies, onClickFavouriteMovie} = value
        const {movieDetails, isLiked, isDisliked} = this.state
        const isFavourited = favouriteMovies.some(
          movie => movie.id === movieDetails.id,
        )

        const onClickFavourite = () => {
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken === undefined) {
            const {history} = this.props
            history.push('/login')
          } else {
            onClickFavouriteMovie(movieDetails)
          }
        }

        return (
          <MovieDetailsCardContainer darkTheme={darkTheme}>
            <MovieImg src={movieDetails.backdropPath} />
            <MovieTitle darkTheme={darkTheme}>{movieDetails.title}</MovieTitle>
            <MovieStatsAndOptionsContainer darkTheme={darkTheme}>
              <MovieRatingAndReleaseDetailsContainer>
                <RatingContainer>
                  <AiFillStar color="yellow" />
                  <RatingCount>{movieDetails.voteAverage}</RatingCount>
                </RatingContainer>
                {movieDetails.releaseDate && (
                  <ReleaseDate>
                    {format(new Date(movieDetails.releaseDate), 'dd MMM yyyy')}
                  </ReleaseDate>
                )}
              </MovieRatingAndReleaseDetailsContainer>

              <MovieCardOptionsContainer>
                <OptionContainer isLiked={isLiked}>
                  <BiLike size="20" />
                  <IconButtonText
                    isLiked={isLiked}
                    onClick={this.onClickLikedBtn}
                  >
                    Like
                  </IconButtonText>
                </OptionContainer>
                <OptionContainer isDisliked={isDisliked}>
                  <BiDislike size="20" />
                  <IconButtonText
                    isDisliked={isDisliked}
                    onClick={this.onClickDislikedBtn}
                  >
                    Dislike
                  </IconButtonText>
                </OptionContainer>
                <OptionContainer
                  isFavourited={isFavourited}
                  onClick={onClickFavourite}
                >
                  <FaBookmark size="15" />
                  <IconButtonText isFavourited={isFavourited}>
                    {isFavourited ? 'Favourited' : 'Favourite'}
                  </IconButtonText>
                </OptionContainer>
              </MovieCardOptionsContainer>
            </MovieStatsAndOptionsContainer>

            <LineBreak />

            <MovieCardContentContainer>
              <HomePage
                as="a"
                href={movieDetails.homepage}
                target="_blank"
                darkTheme={darkTheme}
              >
                {movieDetails.homepage}
              </HomePage>
              <MovieCardDescription>
                {movieDetails.overview}
              </MovieCardDescription>
            </MovieCardContentContainer>
          </MovieDetailsCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <BgContainer>
        <Header />
        <NavbarAndContentContainer>
          <NavbarDisplayContainer>
            <Navbar activeTab={activeTab} />
          </NavbarDisplayContainer>
          <MovieDetailsContainer>
            {this.renderApiStatus()}
          </MovieDetailsContainer>
        </NavbarAndContentContainer>
      </BgContainer>
    )
  }
}

export default LatestMovie
