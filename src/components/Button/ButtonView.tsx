import React from 'react'

import { Button } from './Button.styles'

interface ButtonViewProps {
  label: string
  type: 'button' | 'submit' | 'reset'
  disabled: boolean
}

const ButtonView: React.FC<ButtonViewProps> = ({ label, ...props }) => (
  <Button {...props}>{label}</Button>
)

export default ButtonView
