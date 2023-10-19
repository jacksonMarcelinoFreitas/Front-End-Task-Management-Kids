export interface ITextArea {
  label?: string,
  name?: string,
  error?: string,
  touched?: boolean,
  placeholder?: string,
  value?: string | number | undefined,
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (e: React.MouseEventHandler<HTMLTextAreaElement>) => void;
}