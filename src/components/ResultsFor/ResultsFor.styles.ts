import styled from '@emotion/styled/macro'

import { Paragraph } from 'components/Typography'
import { IcoClose } from 'styles/icofont'
import theme from 'styles/theme'

export const Root = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  ${Paragraph} {
    margin-right: 0.5rem;
  }
`

export const ClearIcon = styled(IcoClose)`
  font-size: ${theme.fontSize.icon.normal};
  color: ${theme.colors.text.main};
  margin-left: 1rem;
  cursor: pointer;
`
