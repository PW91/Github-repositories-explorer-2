import { css } from '@emotion/react'
import normalize from 'emotion-normalize'

import { icofont } from './icofont'
import theme from 'styles/theme'

const base = css`
  * {
    border: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    color: ${theme.colors.text.main};
    font: normal ${theme.fontSize.text.normal} / ${theme.lineHeight.normal} ${theme.fontFamily.main};
    min-height: 100%;
  }

  ul {
    list-style-type: none;
  }

  ul, li {
    padding: 0;
    margin: 0;
  }

  a {
    color: ${theme.colors.link.active};
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.link.hovered};
      text-decoration: none;
    }
  }
`

export default css`
  ${normalize}
  ${base} 
  ${icofont}
`
