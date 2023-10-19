import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    width: 100%;

  .box {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 8px;

    width: 100%;

    input{
      height: 24px;
      width: 24px;
    }

    label{
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      font-weight: 500;
      text-align: center;
      font-family: 'Poppins', sans-serif;

      a{
        color: ${({theme}) => theme.COLORS.VIOLET_700};
      }
    }

  }

  .message-error{
    width: 100%;
    font-size: 12px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    color: ${({theme}) => theme.COLORS.PINK_400};
  }
`

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  width: 100%;
  padding: 0 0 16px 0;

  button{
    font-size: 18px;
    text-align: center;

    height: 42px;

    padding: 0 16px;
    border-radius: 8px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.PINK_400};
  }
`
