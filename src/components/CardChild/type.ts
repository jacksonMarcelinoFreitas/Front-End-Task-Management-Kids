export interface ICardChild {
  age?: number,
  tasks?: number | 0,
  value?: string,
  className?: string,
  nameChild?: string,
  textButton?: string,
  Icon?: React.ElementType,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}