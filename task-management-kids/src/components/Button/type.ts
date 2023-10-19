export interface IButtonProps {
  value: string;
  disabled?: boolean;
  className?: string;
  Icon?: React.ElementType;
  type?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}