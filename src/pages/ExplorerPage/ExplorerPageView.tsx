import React from 'react'

import SearchResults from 'components/SearchResults'
import SearchForm from 'forms/SearchForm'
import type { UsersType } from 'utils/commonTypes'

interface HomePageViewProps {
  users: UsersType
  isLoadingUsers: boolean
}

const HomePageView: React.FC<HomePageViewProps> = ({
  isLoadingUsers,
  users
}) => (
  <>
    <SearchForm
      isLoadingUsers={isLoadingUsers}
    />
    <SearchResults
      users={users}
      isLoadingUsers={isLoadingUsers}
    />
  </>
)

export default HomePageView
