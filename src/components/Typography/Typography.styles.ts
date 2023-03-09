import styled from '@emotion/styled/macro'

import theme from 'styles/theme'

export const BigHeading = styled.h1`
  color: ${theme.colors.text.main};
  font-size: ${theme.fontSize.text.big};
  margin: 0;
  font-weight: 700;
`

export const NormalHeading = styled.h3`
  color: ${theme.colors.text.main};
  font-size: ${theme.fontSize.text.normal};
  margin: 0;
  font-weight: 700;
`

export const SmallHeading = styled.h5`
  color: ${theme.colors.text.main};
  font-size: ${theme.fontSize.text.tiny};
  margin: 0;
  font-weight: 700;
`

export const Paragraph = styled.p`
  color: ${theme.colors.text.main};
  font-size: ${theme.fontSize.text.small};
  margin: 0;
`

export const Annotation = styled.span`
  color: ${theme.colors.text.main};
  font-size: ${theme.fontSize.text.extraSmall};
  margin: 0;
`
