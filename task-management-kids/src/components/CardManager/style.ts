import styled from 'styled-components';
import listImage from '../../assets/list-child-back-card.svg'
import registerImage from '../../assets/register-child-back-card.svg'
import startImage from '../../assets/start-child-back-card.svg'
import editImage from '../../assets/edit-child-back-card.svg'

export const Container = styled.div`
  &.edit, &.register, &.list, &.start {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 130px;

    border-radius: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 20px;
    font-weight: bold;
    font-family: 'Poppins' sans-serif;

    background-position: -16px 0px;
    background-repeat: no-repeat;

    cursor: pointer;
  }

  &.edit{
    background-color: ${({theme}) => theme.COLORS.VIOLET_100};
    border: 3px solid ${({theme}) => theme.COLORS.VIOLET_400};
    background-image: url(${editImage});
  }

  &.register{
    background-color: ${({theme}) => theme.COLORS.PINK_100};
    border: 3px solid ${({theme}) => theme.COLORS.PINK_400};
    background-image: url(${registerImage});
  }

  &.list{
    background-color: ${({theme}) => theme.COLORS.CYAN_400};
    border: 3px solid ${({theme}) => theme.COLORS.CYAN_700};
    background-image: url(${listImage});
  }

  &.start{
    background-color: ${({theme}) => theme.COLORS.TURQUOSE_400};
    border: 3px solid ${({theme}) => theme.COLORS.TURQUOSE_700};
    background-image: url(${startImage});
  }

`