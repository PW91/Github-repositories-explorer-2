import styled from '@emotion/styled/macro'
import { keyframes } from '@emotion/core'

import theme from 'styles/theme'
import { Paragraph } from 'components/Typography'

const throbber = keyframes`
  0% {
    background-color: ${theme.colors.throbber.main};
    border-color: transparent;
    transform: translate(-50%, -50%) scale(0);
  }

  80% {
    background-color: transparent;
    border-color: ${theme.colors.throbber.main};
    transform: translate(-50%, -50%) scale(.8);
  }

  100% {
    border-color: transparent;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const Root = styled.div`
  text-align: center;
  margin: 1rem 0;
`

export const Text = styled(Paragraph)`
  font-style: italic;
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;

  &:before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    border: 0.5rem solid;
    animation: ${throbber} 1s infinite ease-in-out;
    opacity: 0.5;
  }
`
