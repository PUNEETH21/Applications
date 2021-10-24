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
  @media (max-width: 768px) {
    display: none;
  }
`

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: stretch;
`

export const MovieDetailsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f1f1f1')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
`

export const MovieStatsAndOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #475569;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const MovieRatingAndReleaseDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  list-style-type: none;
`

export const ReleaseDate = styled.li`
  display: flex;
  align-items: center;
  padding-left: 10px;
  ::before {
    content: '•';
    padding-right: 10px;
    font-size: 25px;
  }
`

export const MovieCardOptionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const OptionContainer = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0px;
  color: ${props =>
    props.isLiked === true ||
    props.isDisliked === true ||
    props.isFavourited === true
      ? '#2563eb'
      : '#64748b'};
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const IconButtonText = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  color: ${props =>
    props.isLiked === true ||
    props.isDisliked === true ||
    props.isFavourited === true
      ? '#2563eb'
      : '#64748b'};
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  font-size: 15px;
  font-weight: 600;
  margin-left: 6px;
  margin-right: 20px;
`

export const LineBreak = styled.hr`
  width: 100%;
  border: 1px solid #475569;
`

export const MovieImg = styled.img`
  width: 99%;
  height: 90vh;
  align-self: flex-start;
`

export const MovieCardContentContainer = styled.div`
  align-self: flex-start;
  @media (max-width: 768px) {
    padding-bottom: 0px;
    margin: 0px;
  }
`

export const MovieCardDescription = styled.p``

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

export const HomePage = styled.p`
  text-decoration: none;
  color: blue;
`
