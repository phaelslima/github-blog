import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
  }

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
