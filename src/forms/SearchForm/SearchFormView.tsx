import React from 'react'
import { Form, Formik } from 'formik'
import { useTranslation } from 'react-i18next'

import { FIELDS, validationSchema } from './SearchForm.formik'
import Input from 'components/Input'
import Button from 'components/Button'
import { FieldWrap, Label } from 'forms/common/form.styles'
import { isEmpty } from 'utils/helpers'
import type { SubmitFnType } from 'utils/commonTypes'

interface SearchFormViewProps {
  onSubmit: SubmitFnType
  isLoadingUsers: boolean
}

const SearchFormView: React.FC<SearchFormViewProps> = ({ onSubmit, isLoadingUsers }) => {
  const { t } = useTranslation('common')
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ username: '' }}
      onSubmit={onSubmit}
    >
      {({
        getFieldProps,
        getFieldMeta,
        isValid,
        dirty,
        submitCount,
        errors,
        touched
      }) => {
        return (
          <Form>
            <Label htmlFor={FIELDS.USERNAME}>{t('form.labels.username')}</Label>
            <FieldWrap>
              <Input
                {...getFieldProps(FIELDS.USERNAME)}
                {...getFieldMeta(FIELDS.USERNAME)}
                id={FIELDS.USERNAME}
                placeholder={t('form.placeholders.username')}
              />
            </FieldWrap>
            <Button
              type='submit'
              label={t('buttons.search')}
              disabled={
                isLoadingUsers ||
              (!isValid && dirty && submitCount > 0) ||
              (!isEmpty(errors) && !isEmpty(touched))
              }
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SearchFormView
