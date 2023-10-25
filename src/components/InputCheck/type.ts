export interface IInputCheck {
  id?: string,
  name?: string,
  text?: string,
  error?: string,
  touched?: boolean,
  checked?: boolean,
  placeholder?: string,
  Icon?: React.ElementType,
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEventHandler<HTMLInputElement>) => void;
}