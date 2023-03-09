import React from 'react'
import { useTranslation } from 'react-i18next'

import { Paragraph, NormalHeading } from 'components/Typography'
import { Root, ClearIcon } from './ResultsFor.styles'

interface ResultsForViewProps {
  setUrlSearchParams: (query: string) => void
  searchQuery: string
}

const ResultsForView: React.FC<ResultsForViewProps> = ({ setUrlSearchParams, searchQuery }) => {
  const { t } = useTranslation('common')

  return (
    <Root>
      <Paragraph>{t('results.forPhrase')}</Paragraph>
      <NormalHeading>{searchQuery}</NormalHeading>
      <ClearIcon onClick={() => { setUrlSearchParams('') }}/>
    </Root>
  )
}

export default ResultsForView
