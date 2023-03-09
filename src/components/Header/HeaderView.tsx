import React from 'react'
import { useTranslation } from 'react-i18next'

import { BigHeading } from 'components/Typography'
import { Header } from './Header.styles'

const HeaderView = () => {
  const { t } = useTranslation('common')
  return (
    <Header>
      <BigHeading>{t('header.title')}</BigHeading>
    </Header>
  )
}

export default HeaderView
