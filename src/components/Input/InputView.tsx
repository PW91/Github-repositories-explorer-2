import React from 'react'
import { useTranslation } from 'react-i18next'

import { ValidationError } from 'forms/common/form.styles'
import { Input, Root } from './Input.styles'

interface InputViewProps {
  id: string
  touched: boolean
  error?: string
  placeholder: string
}

const InputView: React.FC<InputViewProps> = ({
  touched,
  error,
  ...props
}) => {
  const { t } = useTranslation('common')
  return (
    <Root>
      <Input isInvalid={!!(error && touched)} {...props} />
      {touched && error && <ValidationError>{t(`validations.${error}`)}</ValidationError>}
    </Root>
  )
}

export default InputView
