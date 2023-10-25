import * as Yup from 'yup';

export const schema = Yup.object().shape({
  login: Yup.string()
    .min(3, "Mínimo de caracteres aceitável é 3")
    .max(55, "Máximo de caracteres aceitável é 55")
    .required("E-mail ou Nickname é obrigatório"),
  password: Yup.string()
    .min(8, "Mínimo de caracteres aceitável é 8")
    .max(55, "Máximo de caracteres aceitável é 55")
    .test(
      "password",
      "A senha deve conter pelo menos uma letra maiúscula e pelo menos um número",
      function(value: string | undefined) {
        if (!value) return false;
        return /^(?=.*[A-Z])(?=.*[0-9]).*$/.test(value);
      }
    )
    .required("A senha é obrigatória")
});
