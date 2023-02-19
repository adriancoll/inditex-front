import * as yup from 'yup'

export const AddProductSchema = yup.object({
  id: yup.string(),
  colorCode: yup.number().required('Debes introducir un color!'),
  storageCode: yup.number().required('Debes introducir un storage!')
})
