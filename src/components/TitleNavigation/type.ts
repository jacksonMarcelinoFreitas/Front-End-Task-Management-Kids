export interface ITitleNavigation{
  title?: string,
  titleButton?: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}