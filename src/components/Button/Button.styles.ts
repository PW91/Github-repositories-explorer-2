import styled from '@emotion/styled/macro'

import theme from 'styles/theme'

export const Button = styled.button`
  font-size: ${theme.fontSize.text.normal};
  border-radius: ${theme.borderRadius.main};
  background-color: ${theme.colors.button.main};
  color: ${theme.colors.text.contrast};
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 1.5rem 0rem;
  transition: background-color 0.3s;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${theme.colors.button.hover};
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: ${theme.colors.button.disabled};
  }
`
