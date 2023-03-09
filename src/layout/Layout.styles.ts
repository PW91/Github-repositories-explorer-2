import styled from '@emotion/styled/macro'

import { mediaUp } from 'styles/breakpoints'
import theme from 'styles/theme'

export const Layout = styled.div`
  background: ${theme.colors.background.grey};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex-grow: 1;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 90%;

  ${mediaUp.md} {
    max-width: 60rem;
  }
`
