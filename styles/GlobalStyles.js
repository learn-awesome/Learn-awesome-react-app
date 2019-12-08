import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
 ${normalize()};
   html{
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
     font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
  }

  nav {
        text-align: center;
      }

      ul {
        display: flex;
        justify-content: space-between;
      }

      nav > ul {
        padding: 4px 16px;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }

      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
  `;

export default GlobalStyles;
