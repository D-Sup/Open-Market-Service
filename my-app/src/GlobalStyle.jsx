const { createGlobalStyle } = require('styled-components');
const { default: reset } = require('styled-reset');

export const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    cursor: pointer;
  }

  button, input {
    border: none;
    padding: initial;
    margin: initial;
  }

  button {
    cursor: pointer;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
