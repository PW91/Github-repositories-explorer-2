import { QUERY_NAMES, SEARCH_RESULTS_LIMIT } from './consts'
import { withQuery } from './helpers'

export const apiRoutes = {
  [QUERY_NAMES.SEARCH_USERS]: (searchQuery: string) => withQuery('/search/users', { q: searchQuery, per_page: SEARCH_RESULTS_LIMIT }),
  [QUERY_NAMES.USER_REPOS]: (username: string) => `/users/${username}/repos`
}
