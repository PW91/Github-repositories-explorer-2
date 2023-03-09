import React from 'react'

import { useSearchUsersQuery } from 'api/queries'
import ExplorerPageView from './ExplorerPageView'
import { useSearchParams } from 'hooks/useSearchParams'

const ExplorerPageContainer = () => {
  const { searchQuery } = useSearchParams()
  const { users, isLoading: isLoadingUsers } = useSearchUsersQuery(searchQuery)

  return (
    <ExplorerPageView
      users={users}
      isLoadingUsers={isLoadingUsers}
    />
  )
}

export default ExplorerPageContainer
