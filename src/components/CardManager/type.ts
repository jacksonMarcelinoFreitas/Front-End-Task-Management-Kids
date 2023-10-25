type CardType = 'edit' | 'register' | 'list' | 'start';

export interface ICardManager{
  textCard: string,
  typeCard?: CardType,
  onClick?: (e: React.MouseEvent) => void;
}