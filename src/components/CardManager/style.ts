import registerImage from '../../assets/register-child-back-card.svg'
import startImage from '../../assets/start-child-back-card.svg'
import listImage from '../../assets/list-child-back-card.svg'
import editImage from '../../assets/edit-child-back-card.svg'
import { device } from '../../utils/device';
import styled from 'styled-components';

export const Container = styled.div`
  &.edit, &.register, &.list, &.start {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 13rem;

    border-radius: 1.2rem;

    font-size: 2rem;
    font-weight: bold;
    font-family: 'Poppins' sans-serif;
    color: ${({theme}) => theme.COLORS.WHITE};

    background-position: -1.6rem 0;
    background-repeat: no-repeat;

    cursor: pointer;
  }

  &.edit{
    background-color: ${({theme}) => theme.COLORS.VIOLET_100};
    border: .3rem solid ${({theme}) => theme.COLORS.VIOLET_400};
    background-image: url(${editImage});
  }

  &.register{
    background-color: ${({theme}) => theme.COLORS.PINK_100};
    border: .3rem solid ${({theme}) => theme.COLORS.PINK_400};
    background-image: url(${registerImage});
  }

  &.list{
    background-color: ${({theme}) => theme.COLORS.CYAN_400};
    border: .3rem solid ${({theme}) => theme.COLORS.CYAN_700};
    background-image: url(${listImage});
  }

  &.start{
    background-color: ${({theme}) => theme.COLORS.TURQUOSE_400};
    border: .3rem solid ${({theme}) => theme.COLORS.TURQUOSE_700};
    background-image: url(${startImage});
  }


  @media ${device.tablet} {
    &.edit, &.register, &.list, &.start {
      font-size: 2.6rem;
    }
  }

  @media ${device.laptop} {
    &.edit, &.register, &.list, &.start {
      height: 25rem;
      background-size: clamp(20rem, 90%, 40rem);
      background-position: bottom -9rem left -6rem;

      font-size: 3rem;
    }
  }

  @media ${device.laptopL} {
    &.edit, &.register, &.list, &.start {
      height: 30rem;
      background-size: clamp(20rem, 90%, 40rem);
      background-position: bottom -10rem left -4rem;

      font-size: 3.2rem;

    }
  }

`