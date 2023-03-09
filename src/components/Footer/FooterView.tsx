import React from 'react'
import { useTranslation } from 'react-i18next'

import { Annotation } from 'components/Typography/index'
import { Footer } from './Footer.styles'

const FooterView = () => {
  const { t } = useTranslation('common')
  return (
    <Footer>
      <Annotation>{t('footer.author')}</Annotation>
    </Footer>
  )
}

export default FooterView
