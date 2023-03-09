import { css } from '@emotion/core'
import styled from '@emotion/styled'
import icofontEot from 'static/fonts/icofont.eot'
import icofontWoff2 from 'static/fonts/icofont.woff2'
import icofontWoff from 'static/fonts/icofont.woff'
import icofontTtf from 'static/fonts/icofont.ttf'

export const icofont = css`
  @font-face {
    font-family: 'icofont';
    src: url(${icofontEot}) format('embedded-opentype'),
    url(${icofontWoff2}) format('woff2'),
    url(${icofontWoff}) format('woff'),
    url(${icofontTtf}) format('truetype')
  }
`

const icoBase = css`
  font-family: 'icofont' !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const IcoArrow = styled.span`
  ${icoBase}
  &:before {
    content: '\\f101';
  }
`
export const IcoClose = styled.span`
  ${icoBase}
  &:before {
    content: '\\f102';
  }
`
export const IcoLink = styled.span`
  ${icoBase}
  &:before {
    content: '\\f103';
  }
`
export const IcoStar = styled.span`
  ${icoBase}
  &:before {
    content: '\\f104';
  }
`
