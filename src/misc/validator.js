
import * as yup from 'yup'

const validationsLogin = yup.object().shape({
  user: yup.string().min(6).max(20).required(),
  password: yup.string().min(6).max(16).required()
});

const validationsRegister = yup.object().shape({
  user: yup.string().min(6).max(20).required(),
  password: yup.string().min(6).max(16).required(),
  email: yup.string().email().required
});


export function Validator(){}