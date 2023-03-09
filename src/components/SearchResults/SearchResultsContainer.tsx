import React, { useMemo, useState } from 'react'

import { useUserReposQuery } from 'api/queries'
import SearchResultsView from './SearchResultsView'
import { useSearchParams } from 'hooks/useSearchParams'
import type { UsersType } from 'utils/commonTypes'

interface SearchResultsContainerProps {
  users: UsersType
  isLoadingUsers: boolean
}

const SearchResultsContainer: React.FC<SearchResultsContainerProps> = props => {
  const { searchQuery } = useSearchParams()
  const [activeCard, setActiveCard] = useState('')
  const { repos, isLoading: isLoadingRepos } = useUserReposQuery(activeCard)

  const onUserCardClick = (username: string) => {
    setActiveCard(username === activeCard ? '' : username)
  }

  const memoRepos = useMemo(() => repos, [repos])

  return (
    <SearchResultsView
      searchQuery={searchQuery}
      onUserCardClick={onUserCardClick}
      activeCard={activeCard}
      isLoadingRepos={isLoadingRepos}
      repos={memoRepos}
      {...props}
    />
  )
}

export default SearchResultsContainer
