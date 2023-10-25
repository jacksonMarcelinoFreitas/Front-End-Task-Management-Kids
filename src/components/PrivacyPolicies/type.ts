export interface IPrivacyPolicy{
  text1?: string;
  text2?: string;
  link1?: string;
  link2?: string;
  name?: string,
  value?: string,
  error?: string,
  touched?: boolean,
  checked?: boolean,
  Icon?: React.ElementType,
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
