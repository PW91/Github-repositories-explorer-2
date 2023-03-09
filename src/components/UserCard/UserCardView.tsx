import React from 'react'
import { useTranslation } from 'react-i18next'

import RepoCard from 'components/RepoCard'
import {
  Root,
  UserCard,
  UserMeta,
  DropdownIcon,
  Avatar,
  ReposList
} from './UserCard.styles'
import type { ReposType } from 'utils/commonTypes'
import Loader from 'components/Loader'
import NoResults from 'components/NoResults'
import { BigHeading } from 'components/Typography'

interface UserCardViewProps {
  repos: ReposType
  login: string
  avatarUrl: string
  isActive: boolean
  isLoadingRepos: boolean
  onUserCardClick: (username: string) => void
}

const UserCardView: React.FC<UserCardViewProps> = ({
  onUserCardClick,
  avatarUrl,
  login,
  isActive,
  isLoadingRepos,
  repos
}) => {
  const { t } = useTranslation('common')
  return (
    <Root>
      <UserCard
        onClick={() => { onUserCardClick(login) }}
        isActive={isActive}
      >
        <UserMeta>
          <Avatar src={avatarUrl} alt='avatar' />
          <BigHeading>{login}</BigHeading>
        </UserMeta>
        <DropdownIcon isActive={isActive} />
      </UserCard>
      {isActive &&
        <>
          {isLoadingRepos
            ? <Loader info={t('results.loadingRepos')} />
            : repos.length
              ? <ReposList>
                {repos.map(repo => (
                  <RepoCard
                    key={repo.id}
                    {...repo}
                  />))}
              </ReposList>
              : <NoResults info={t('results.noRepos')} />
          }
        </>
      }
    </Root>
  )
}

export default UserCardView
