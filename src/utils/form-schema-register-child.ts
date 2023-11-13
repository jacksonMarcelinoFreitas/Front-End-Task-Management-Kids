import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  age: yup
    .number()
    .required('A idade é obrigatória')
    .positive('A idade deve ser um número positivo')
    .integer('A idade deve ser um número inteiro')
    .max(18, 'A idade não pode ser maior que 18'),
  nickname: yup
    .string()
    .required('O nickname é obrigatório')
    .min(3, 'O nickname deve ter pelo menos 3 caracteres'),
  password: yup
      .string()
      .min(8, "Mínimo de caracteres aceitável é 8")
      .max(55, "Máximo de caracteres aceitável é 55")
      .test(
        "password",
        "A senha deve conter pelo menos uma letra maiúscula e pelo menos um número",
        function(value: string | undefined) {
          if (!value) return false;
          return /^(?=.*[A-Z])(?=.*[0-9]).*$/.test(value);
        }
      ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'),], 'As senhas devem coincidir'),
});
