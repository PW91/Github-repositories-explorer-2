import React from 'react'

import { Text, Root } from './Loader.styles'

interface LoaderViewProps {
  info: string
}

const LoaderView: React.FC<LoaderViewProps> = ({ info }) => (
  <Root>
    <Text>{info}</Text>
  </Root>
)

export default LoaderView
