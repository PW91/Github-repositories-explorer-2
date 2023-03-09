export type ApiUsersType = Array<{
  login: string
  id: string
  avatar_url: string
}>

export type UsersType = Array<{
  login: string
  id: string
  avatarUrl: string
}>

export type ApiReposType = Array<{
  id: string
  name: string
  html_url: string
  stargazers_count: number
  description: string
}>

export type ReposType = Array<{
  id: string
  name: string
  htmlUrl: string
  stars: number
  description: string
}>

export type SubmitFnType = (
  { username }: { username: string },
  { resetForm }: { resetForm: () => void }
) => void
