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
`

export const NavbarDisplayContainer = styled.div`
  @media (max-width: 868px) {
    display: none;
  }
`

export const FavouriteMovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: stretch;
`

export const FavouriteMovieTopSection = styled.div`
  padding: 20px;
  padding-left: 60px;
  background-color: ${props => (props.darkTheme ? '#313131' : '#ebebeb')};
  @media (max-width: 868px) {
    padding-left: 20px;
  }
`

export const IconAndTitleSection = styled.div`
  display: flex;
  align-items: center;
`

export const FavouriteMovieIconSection = styled.div`
  padding: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#d7dfe9')};
`

export const FavouriteMovieTitle = styled.h1`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const FavouriteMovieListContainer = styled.ul`
  list-style-type: none;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 60px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media (max-width: 868px) {
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 0px;
    padding-top: 30px;
  }
`

export const FavouriteMovieCardItem = styled.li`
  display: flex;
  margin-bottom: 60px;
  @media (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`

export const FavouriteMovieImg = styled.img`
  width: 400px;
  height: 240px;
  @media (max-width: 950px) {
    width: 240px;
    height: 240px;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: 240px;
  }
`

export const FavouriteMovieContentContainer = styled.div`
  padding-left: 20px;
  color: #475569;
`

export const FavouriteMovieCardTitle = styled.p`
  margin-top: 0px;
  line-height: 1.5;
  margin-top: 0px;
  margin-bottom: 6px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const FavouriteMovieStatsContainer = styled.div`
  margin: 0px;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const FavouriteMovieChannelName = styled.p`
  margin: 0px;
  @media (min-width: 668px) {
    margin-bottom: 6px;
  }
`

export const FavouriteMovieChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FavouriteMovieViewsCount = styled.p`
  margin: 0px;
  @media (max-width: 576px) {
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

export const FavouriteMoviePublished = styled.p`
  margin: 0px;
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

export const NoFavouriteMovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  background-color: ${props => (props.darkTheme ? '#000000' : '#f4f4f4')};
`

export const NoFavouriteMovieImg = styled.img`
  width: 50%;
  margin-bottom: 40px;
  @media (max-width: 576px) {
    width: 80%;
  }
`

export const NoFavouriteMovieHeading = styled.h1`
  font-size: 24px;
`

export const NoFavouriteMovieDescription = styled.p``

export const HomeContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const PopularMoviesListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const PopularMovieContainer = styled.li`
  //   width: 32%;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 48%;
  }
  @media (min-width: 768px) {
    width: 32%;
  }
`

export const MovieImg = styled.img`
  width: 100%;
  height: 200px;
`

export const MovieDetailsContainer = styled.div`
  align-self: flex-start;
  padding-bottom: 0px;
  padding-left: 10px;
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

export const MovieTitle = styled.h1`
  color: blue;
  margin-top: 0px;
  margin-bottom: 8px;
  padding: 0px;
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
  color: #2563eb;
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  font-size: 15px;
  font-weight: 600;
  margin-left: 6px;
`
