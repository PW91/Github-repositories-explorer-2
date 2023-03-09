import React from 'react'

import { Paragraph } from 'components/Typography'
import { Root } from './NoResults.styles'

interface NoResultsViewProps {
  info: string
}

const NoResultsView: React.FC<NoResultsViewProps> = ({ info }) => (
  <Root>
    <Paragraph>{info}</Paragraph>
  </Root>
)

export default NoResultsView
