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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const NavbarDisplayContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const PopularMoviesContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f1f1f1')};
`

export const PopularMoviesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: stretch;
  @media (max-width: 576px) {
    padding: 0px;
  }
`

export const MoviesSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  max-width: 400px;
  margin: 24px;
  border: 1px solid ${props => (props.darkTheme ? '#313131' : '#94a3b8')};
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  @media (max-width: 576px) {
    margin-bottom: 0px;
  }
`

export const MoviesSearchInput = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  flex-grow: 1;
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  color: ${props => (props.darkTheme ? '#ffffff' : '')};
`

export const MoviesSearchButton = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 576px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  border: none;
  align-self: stretch;
  background-color: ${props => (props.darkTheme ? '#313131' : '')};
`

export const NoMoviesImg = styled.img`
  width: 50%;
  max-width: 350px;
`

export const NoMoviesHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
`

export const NoMoviesDescription = styled.p`
  color: ${props => (props.darkTheme ? '#475569' : '#424242')};
`

export const NoMoviesRetryBtn = styled.button`
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

export const NoSearchMoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
`

export const NoSearchMoviesImg = styled.img`
  width: 70%;
  max-width: 350px;
`

export const PopularMoviesListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const PopularMovieContainer = styled.li`
  margin-left: 24px;
  //   width: 32%;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 44%;
  }
  @media (min-width: 768px) and (max-width: 1300px) {
    width: 46%;
  }
  @media (min-width: 1300px) {
    width: 30%;
  }
`

export const MovieImg = styled.img`
  width: 100%;
  height: 200px;
`

export const ChannelProfile = styled.img`
  width: 40px;
  align-self: flex-start;
`

export const MovieDetailsContainer = styled.div`
  align-self: flex-start;
  padding-bottom: 60px;
  padding-left: 0px;
`

export const MovieStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MovieRatingAndReleaseDetailsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  list-style-type: none;
  color: #475569;
`

export const MovieViewsCount = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  @media (max-width: 576px) {
    margin-top: 0px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    ::before {
      content: '•';
      padding-right: 10px;
      font-size: 25px;
      color: #475569;
    }
  }
`

export const ReleaseDateText = styled.li`
  display: flex;
  align-items: center;
  padding-left: 10px;
  ::before {
    content: '•';
    padding-right: 10px;
    font-size: 25px;
    color: #475569;
  }
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RatingCount = styled.p`
  padding-left: 10px;
  margin: 0px;
`

export const MovieTitle = styled.p`
  color: blue;
`

export const MovieDescription = styled.p`
  margin-top: 0px;
  line-height: 1.5;
  margin-top: 0px;
  margin-bottom: 6px;
  height: 70px;
  overflow: hidden;
  color: ${props => (props.darkTheme ? '#ffffff' : '')};
`

export const FavouriteButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  color: ${props =>
    props.isLiked === true ||
    props.isDisliked === true ||
    props.isSaved === true
      ? '#2563eb'
      : 'yellow'};
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const FavouriteText = styled.p`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  color: ${props => props.color};
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  font-size: 15px;
  font-weight: 600;
  margin-left: 6px;
`
