import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f4f4f4')};
`
