import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  activeTab: 'NO_ACTIVE',
  favouriteMovies: [],
  onClickFavouriteMovie: () => {},
  getFavouriteMovies: () => {},
})

export default ThemeContext
