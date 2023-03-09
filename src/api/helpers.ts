import type { ApiReposType, ApiUsersType } from 'utils/commonTypes'

export const withQuery = (endpoint: string, queryObj: Record<string, any>) => {
  const newUrlSearchParams = new URLSearchParams(queryObj)
  return `${endpoint}?${newUrlSearchParams.toString()}`
}

export const dataConverter = {
  userRepos: (data: ApiReposType) => data.map(({
    id,
    name,
    html_url,
    stargazers_count,
    description
  }) => ({
    id,
    name,
    htmlUrl: html_url,
    stars: stargazers_count,
    description
  })),
  searchUsers: (data: ApiUsersType) => data.map(({
    login,
    id,
    avatar_url
  }) => ({
    login,
    id,
    avatarUrl: avatar_url
  }))
}
