import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'O nome deve ter pelo menos 5 caracteres')
    .required('O nome da atividade é obrigatório'),
  description: Yup.string()
    .max(255, 'A descrição não pode ter mais de 200 caracteres')
    .required('A descrição é obrigatória'),
  reward: Yup.number()
    .typeError('A recompensa deve ser um número')
    .positive('A recompensa deve ser um número positivo')
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .test('is-decimal', 'A recompensa deve ter no máximo 2 casas decimais', (value) => {
      if (!value) return true; // Permite campos vazios
      return value.toString().match(/^\d+(\.\d{1,2})?$/);
    })
    .required('A recompensa é obrigatória'),
});

export default schema;