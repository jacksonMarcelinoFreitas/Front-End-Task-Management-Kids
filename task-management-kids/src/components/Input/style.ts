import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  label{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_700};
  }

  div{
    display: flex;
    align-items: start;
    justify-content: left;
    gap: 8px;

    padding: 12px;
    width: 100%;

    background: ${({theme}) => theme.COLORS.WHITE};

    border-radius: 8px;

    svg{
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

    input{

      &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-size: 12px;
      }

      color: ${({theme}) => theme.COLORS.GRAY_700};
      background: transparent;

      font-weight: 400;

      width: 100%;
    }
  }
`
