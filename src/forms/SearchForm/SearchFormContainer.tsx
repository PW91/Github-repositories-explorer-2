import React from 'react'

import SearchFormView from './SearchFormView'
import type { SubmitFnType } from 'utils/commonTypes'
import { useSearchParams } from 'hooks/useSearchParams'

interface SearchFormContainerProps {
  isLoadingUsers: boolean
}

const SearchFormContainer: React.FC<SearchFormContainerProps> = ({ isLoadingUsers }) => {
  const { setUrlSearchParams } = useSearchParams()

  const onSubmit: SubmitFnType = ({ username }, { resetForm }) => {
    setUrlSearchParams(username)
    resetForm()
  }

  return (
    <SearchFormView
      onSubmit={onSubmit}
      isLoadingUsers={isLoadingUsers}
    />
  )
}

export default SearchFormContainer
