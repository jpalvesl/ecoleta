import { createGlobalStyle } from 'styled-components';

import { primaryColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${primaryColor.bg};
    -webkit-font-smoothing: antialiased;
    color: ${primaryColor.text};
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1, h2,  h3, h4, h5, h6 {
    color: ${primaryColor.title};
    font-family: Ubuntu;
  }
`;