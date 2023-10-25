export interface IButtonText {
  value: string;
  type: 'submit'|'button'|'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}