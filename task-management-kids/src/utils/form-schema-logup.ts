import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "O nome deve ter pelo menos 3 letras")
    .required("Nome é obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("E-mail é obrigatório"),
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
    .required("A senha é obrigatória"),
  read_terms: Yup.boolean()
    .oneOf([true], "Você deve concordar com os termos")
    .required("Você deve concordar com os termos para continuar"),
});
