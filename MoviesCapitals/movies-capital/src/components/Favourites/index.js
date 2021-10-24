import {HiFire} from 'react-icons/hi'
import {format} from 'date-fns'
import {AiFillStar} from 'react-icons/ai'
import {FaBookmark} from 'react-icons/fa'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Navbar from '../Navbar'
import {
  BgContainer,
  NavbarAndContentContainer,
  NavbarDisplayContainer,
  FavouriteMovieContainer,
  FavouriteMovieTopSection,
  IconAndTitleSection,
  FavouriteMovieIconSection,
  FavouriteMovieTitle,
  FavouriteMovieListContainer,
  FavouriteMovieCardItem,
  FavouriteMovieImg,
  NoFavouriteMovieContainer,
  NoFavouriteMovieImg,
  NoFavouriteMovieHeading,
  NoFavouriteMovieDescription,
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

const activeTab = 'FAVOURITE'

const Favourites = props => {
  const favouriteMovieViewContainer = (
    darkTheme,
    favouriteMovies,
    onClickFavouriteMovie,
  ) => (
    <>
      <FavouriteMovieTopSection darkTheme={darkTheme}>
        <IconAndTitleSection darkTheme={darkTheme}>
          <FavouriteMovieIconSection darkTheme={darkTheme}>
            <HiFire size="30" color="red" />
          </FavouriteMovieIconSection>
          <FavouriteMovieTitle darkTheme={darkTheme}>
            Favourite Movies
          </FavouriteMovieTitle>
        </IconAndTitleSection>
      </FavouriteMovieTopSection>
      <FavouriteMovieListContainer darkTheme={darkTheme}>
        {favouriteMovies.map(movie => {
          const onClickMovie = () => {
            const {id} = movie
            const {history} = props
            history.push(`/movie/${id}`)
          }

          const onClickFavourite = () => onClickFavouriteMovie(movie)

          return (
            <FavouriteMovieCardItem>
              <FavouriteMovieImg
                src={movie.backdropPath}
                alt="movie thumbnail"
                onClick={onClickMovie}
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
                    {movie.releaseDate && (
                      <ReleaseDateText>
                        {format(new Date(movie.releaseDate), 'dd MMM yyyy')}
                      </ReleaseDateText>
                    )}
                  </MovieRatingAndReleaseDetailsContainer>
                  <FavouriteButton onClick={onClickFavourite}>
                    <FaBookmark color="#2563eb" />
                    <FavouriteText>Favourited</FavouriteText>
                  </FavouriteButton>
                </MovieStatsContainer>
              </MovieDetailsContainer>
            </FavouriteMovieCardItem>
          )
        })}
      </FavouriteMovieListContainer>
    </>
  )

  const noFavouriteMoviesViewContainer = darkTheme => (
    <NoFavouriteMovieContainer darkTheme={darkTheme}>
      <NoFavouriteMovieImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no favourite movies"
      />
      <NoFavouriteMovieHeading>
        No Favourite Movies found
      </NoFavouriteMovieHeading>
      <NoFavouriteMovieDescription>
        You can favourite your movies while watching them
      </NoFavouriteMovieDescription>
    </NoFavouriteMovieContainer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const token = Cookies.get('jwt_token')
        if (token === undefined) {
          return <Redirect to="/login" />
        }
        const {darkTheme, favouriteMovies, onClickFavouriteMovie} = value
        return (
          <BgContainer>
            <Header />
            <NavbarAndContentContainer>
              <NavbarDisplayContainer>
                <Navbar activeTab={activeTab} />
              </NavbarDisplayContainer>
              <FavouriteMovieContainer>
                {favouriteMovies.length > 0
                  ? favouriteMovieViewContainer(
                      darkTheme,
                      favouriteMovies,
                      onClickFavouriteMovie,
                    )
                  : noFavouriteMoviesViewContainer(darkTheme)}
              </FavouriteMovieContainer>
            </NavbarAndContentContainer>
          </BgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Favourites
