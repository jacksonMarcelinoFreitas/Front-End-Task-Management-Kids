export interface ICardTask {
  value?: string,
  reward?: number,
  nameTask?: string,
  className?: string,
  textButton?: string,
  Icon?: React.ElementType,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}