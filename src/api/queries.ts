import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

import { useApiInstance } from './instance'
import { apiRoutes } from './apiRoutes'
import { QUERY_NAMES } from './consts'
import useNotification from 'hooks/useNotification'
import { dataConverter } from './helpers'
import type { ApiReposType, ApiUsersType } from 'utils/commonTypes'

export const useSearchUsersQuery = (searchQuery: string) => {
  const api = useApiInstance()
  const notification = useNotification()
  const { t } = useTranslation('common')

  const { data: users = [], ...query } = useQuery<ApiUsersType>([QUERY_NAMES.SEARCH_USERS, searchQuery], async () => {
    try {
      const { data } = await api.get(apiRoutes.searchUsers(searchQuery))
      return data.items
    } catch {
      notification({ msg: t('api.error'), type: 'error' })
    }
  }, {
    enabled: !!searchQuery
  })

  return {
    users: dataConverter.searchUsers(users),
    ...query
  }
}

export const useUserReposQuery = (username: string) => {
  const api = useApiInstance()
  const notification = useNotification()
  const { t } = useTranslation('common')

  const { data: repos = [], ...query } = useQuery<ApiReposType>([QUERY_NAMES.USER_REPOS, username], async () => {
    try {
      const { data } = await api.get(apiRoutes.userRepos(username))
      return data
    } catch {
      notification({ msg: t('api.error'), type: 'error' })
    }
  }, {
    enabled: !!username
  })

  return {
    repos: dataConverter.userRepos(repos),
    ...query
  }
}
