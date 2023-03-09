import styled from '@emotion/styled/macro'

import { Paragraph } from 'components/Typography'
import theme from 'styles/theme'

export const Root = styled.div`
  background-color: ${theme.colors.error.background};
  border: ${theme.border.error};
  border-radius: ${theme.borderRadius.main};
  padding: 0.5rem 2rem;

  ${Paragraph} {
    color: ${theme.colors.text.contrast};
  }
`
