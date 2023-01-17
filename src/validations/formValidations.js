import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const formValidation = yup.object({
  name: yup.string().required('O campo é obrigatório.'),
  email: yup.string().email('Preencha um email válido').required('O campo é obrigatório.'),
  subject: yup.string().required('O campo é obrigatório.'),
  message: yup.string().required('O campo é obrigatório.'),
});

export const formResolver = yupResolver(formValidation);