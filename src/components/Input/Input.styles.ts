import styled from '@emotion/styled/macro'

import theme from 'styles/theme'

interface InputProps {
  isInvalid: boolean
}

export const Root = styled.div`
  position: relative;
`

export const Input = styled.input`
  background: ${theme.colors.background.white};
  font-size: ${theme.fontSize.text.small};
  border: ${theme.border.input};
  border-radius: ${theme.borderRadius.main};
  border-color: ${({ isInvalid }: InputProps) => isInvalid && theme.colors.border.input.invalid};
  color: ${theme.colors.text.main};
  width: 100%;
  height: 5rem;
  padding: 0.5rem 1rem;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.border.input.focused};
  }

  &::placeholder {
    color: ${theme.colors.text.label};
    font-style: italic;
  }
`
