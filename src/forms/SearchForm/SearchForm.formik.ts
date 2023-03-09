import { object, string } from 'yup'

import { VALIDATION_ERROR_MSGS } from 'forms/common/validations'

export const FIELDS = {
  USERNAME: 'username'
}

export const validationSchema = object({
  [FIELDS.USERNAME]: string().required(VALIDATION_ERROR_MSGS.REQUIRED).min(3, VALIDATION_ERROR_MSGS.MIN_3_LETTERS)
})
