import styled from '@emotion/styled/macro'

import { NormalHeading, SmallHeading } from 'components/Typography'
import { IcoLink, IcoStar } from 'styles/icofont'
import theme from 'styles/theme'

export const RepoCard = styled.li`
  border-radius: ${theme.borderRadius.main};
  background-color: ${theme.colors.background.white};
  padding: 0.5rem 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0.5rem 0 0.5rem 2rem;
`

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 15%;

  ${SmallHeading} {
    margin-top: 0.3rem;
  }
`

export const RepoHeader = styled.div`
  display: flex;
  align-items: center;

  ${NormalHeading} {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const RepoMeta = styled.div`
  width: 85%;
`

export const StarIcon = styled(IcoStar)`
  font-size: ${theme.fontSize.icon.normal};
  margin-left: 0.5rem;
`

export const LinkIcon = styled(IcoLink)`
  font-size: ${theme.fontSize.icon.normal};
  margin-left: 0.5rem;
`

export const Link = styled.a`
  margin-top: 0.3rem;
`
