import React from 'react'
import { useTranslation } from 'react-i18next'

import Loader from 'components/Loader'
import NoResults from 'components/NoResults'
import ResultsFor from 'components/ResultsFor'
import UserCard from 'components/UserCard'
import { ResultsList } from './SearchResults.styles'
import type { ReposType, UsersType } from 'utils/commonTypes'

interface SearchResultsViewProps {
  users: UsersType
  searchQuery: string
  isLoadingUsers: boolean
  repos: ReposType
  activeCard: string
  onUserCardClick: (username: string) => void
  isLoadingRepos: boolean
}

const SearchResultsView: React.FC<SearchResultsViewProps> = ({
  searchQuery,
  isLoadingUsers,
  users,
  activeCard,
  ...props
}) => {
  const { t } = useTranslation('common')
  return (
    <>
      {isLoadingUsers
        ? <Loader info={t('results.loadingUsers')} />
        : <>
          {searchQuery && <ResultsFor />}
          {users.length
            ? <ResultsList>
              {users.map(user => (
                <UserCard
                  key={user.id}
                  isActive={activeCard === user.login}
                  {...user}
                  {...props}
                />
              ))}
            </ResultsList>
            : searchQuery && <NoResults info={t('results.noUsers')} />
          }
        </>
      }
    </>
  )
}

export default SearchResultsView
