import * as Yup from 'yup';

export const schema = Yup.object().shape({
  token: Yup.string()
    .max(10, 'Tamanho de token incorreto')
    .min(5, 'Tamanho de token incorreto')
    .required('Token é obrigatório'),
  newPassword: Yup.string()
    .min(8, 'Mínimo de caracteres aceitável é 8')
    .max(55, 'Máximo de caracteres aceitável é 55')
    .test(
      'newPassword',
      'A senha deve conter pelo menos uma letra maiúscula e pelo menos um número',
      function (value) {
        if (!value) return false;
        return /^(?=.*[A-Z])(?=.*[0-9]).*$/.test(value);
      }
    )
    .required('A nova senha é obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'As senhas devem coincidir')
    .required('A confirmação de senha é obrigatória'),
});