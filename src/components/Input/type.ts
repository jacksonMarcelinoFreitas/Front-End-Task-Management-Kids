export interface IInput {
  type: string,
  label?: string,
  name?: string,
  error?: string,
  touched?: boolean,
  checked?: boolean,
  placeholder?: string,
  Icon?: React.ElementType,
  value?: string | number | undefined,
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEventHandler<HTMLInputElement>) => void;
}
