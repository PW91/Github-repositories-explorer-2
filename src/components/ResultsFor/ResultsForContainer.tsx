import React from 'react'

import { useSearchParams } from 'hooks/useSearchParams'
import ResultsForView from './ResultsForView'

const ResultsForContainer = () => {
  const { setUrlSearchParams, searchQuery } = useSearchParams()

  return (
    <ResultsForView
      setUrlSearchParams={setUrlSearchParams}
      searchQuery={searchQuery}
    />
  )
}

export default ResultsForContainer
