import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

export const useSearchParams = () => {
  const { push } = useHistory()
  const { search, pathname } = useLocation()
  const [searchQuery, setsearchQuery] = useState('')

  useEffect(() => {
    const newUrlSearchParams = new URLSearchParams(search)
    const { q } = Object.fromEntries(newUrlSearchParams)

    setsearchQuery(q)
  }, [search])

  const setUrlSearchParams = (query: string) => {
    const newUrlSearchParams = new URLSearchParams()
    newUrlSearchParams.append('q', query)

    push({
      pathname,
      search: query ? `?${newUrlSearchParams.toString()}` : ''
    })
  }

  return ({
    searchQuery,
    setUrlSearchParams
  })
}
