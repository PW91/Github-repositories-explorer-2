import React from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from './Page404.styles'

const Page404View = () => {
  const { t } = useTranslation('common')
  return (
    <Text>{t('fallback.notFound')}</Text>
  )
}

export default Page404View
