import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  } 
`
