import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  gap: 4px;

  width: 100%;

  label{
    font-style: normal;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;

    color: ${({theme}) => theme.COLORS.GRAY_700};
  }

  div{
    display: flex;
    align-items: start;
    justify-content: left;
    gap: 8px;

    width: 100%;
    padding: 12px;

    border-radius: 8px;

    background: ${({theme}) => theme.COLORS.WHITE};

    svg{
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

    textarea{

      &::placeholder{
        font-size: 12px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
      }

      background: transparent;
      color: ${({theme}) => theme.COLORS.GRAY_700};

      font-weight: 400;

      width: 100%;
      height: 200px;

      resize: none;
    }
  }

  .message-error{
    width: 100%;
    font-family: 'Inter', sans-serif;
    text-align: left;
    font-size: 12px;
    color: ${({theme}) => theme.COLORS.PINK_400};
  }
`
