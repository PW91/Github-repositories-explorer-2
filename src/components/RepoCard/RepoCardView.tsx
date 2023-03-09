import React from 'react'

import {
  RepoCard,
  RepoMeta,
  RepoHeader,
  StarIcon,
  LinkIcon,
  StarsContainer,
  Link
} from './RepoCard.styles'
import {
  NormalHeading,
  SmallHeading,
  Paragraph
} from 'components/Typography'

interface RepoCardViewProps {
  name: string
  htmlUrl: string
  description: string
  stars: number
}

const RepoCardView: React.FC<RepoCardViewProps> = ({
  htmlUrl,
  description,
  stars,
  name
}) => (
  <RepoCard>
    <RepoMeta>
      <RepoHeader>
        <NormalHeading>{name}</NormalHeading>
        <Link href={htmlUrl} target='_blank'>
          <LinkIcon />
        </Link>
      </RepoHeader>
      {description && <Paragraph>{description}</Paragraph>}
    </RepoMeta>
    <StarsContainer>
      <SmallHeading>{stars}</SmallHeading>
      <StarIcon />
    </StarsContainer>
  </RepoCard>
)

export default RepoCardView
