import styled from '@emotion/styled/macro'

import theme from 'styles/theme'
import { Root as NoResultsRoot } from 'components/NoResults/NoResults.styles'
import { IcoArrow } from 'styles/icofont'
import { BigHeading } from 'components/Typography'

interface DropdownIconProps {
  isActive: boolean
}

interface UserCardProps {
  isActive: boolean
}

export const Root = styled.li`
  margin-bottom: 1rem;

  ${NoResultsRoot} {
    margin: 0.5rem 0 0.5rem 2rem;
  }
`

export const UserCard = styled.div`
  background-color: ${theme.colors.background.white};
  border-radius: ${theme.borderRadius.main};
  box-shadow: ${theme.shadow.box};
  border: ${({ isActive }: UserCardProps) => isActive && theme.border.element};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.background.lightGrey};
  }

  ${BigHeading} {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const Avatar = styled.img`
  width: 6rem;
  margin-right: 1rem;
`

export const UserMeta = styled.div`
  display: flex;
  align-items: center;
  max-width: 75%;
`

export const DropdownIcon = styled(IcoArrow)`
  transform: ${({ isActive }: DropdownIconProps) => isActive && 'rotate(180deg)'};
  color: ${theme.colors.text.main};
  font-size: ${theme.fontSize.icon.normal};
  transition: transform 0.3s;
`

export const ReposList = styled.ul``
