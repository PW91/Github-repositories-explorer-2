import styled from '@emotion/styled/macro'

import theme from 'styles/theme'

export const ValidationError = styled.span`
  color: ${theme.colors.error.main};
  font-size: ${theme.fontSize.text.small};
  position: absolute;
  bottom: -2rem;
  left: 0;
`

export const FieldWrap = styled.div`
  margin-bottom: 3rem;
`

export const Label = styled.label`
  font-size: ${theme.fontSize.text.normal};
  color: ${theme.colors.text.label};
  margin-bottom: 0.5rem;
`
