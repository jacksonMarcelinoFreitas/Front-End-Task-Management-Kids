import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  gap: 0.4rem;

  width: 100%;

  label{
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_700};
    font-size: clamp(1.4rem, 1.6rem, 2rem);
  }

  div{
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.2rem;

    padding: 1.6rem 1.2rem;

    width: 100%;

    background: ${({theme}) => theme.COLORS.WHITE};

    border-radius: 0.8rem;

    svg{
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

    input{

      &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-size: 1.2rem;
      }

      color: ${({theme}) => theme.COLORS.GRAY_700};
      background: transparent;

      font-weight: 400;

      width: 100%;
    }
  }

  .message-error{
    width: 100%;
    font-family: 'Poppins', sans-serif;
    text-align: left;
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.PINK_400};
  }
`
