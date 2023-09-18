import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    width: 100%;

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;

    width: 100%;

    input{
      height: 24px;
      width: 24px;
    }


    label{
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      text-align: center;
      font-weight: 500;

      a{
        color: ${({theme}) => theme.COLORS.VIOLET_700};
      }
    }

  }

  .message-error{
    width: 100%;
    font-family: 'Inter', sans-serif;
    /* word-wrap: break-word; */
    text-align: left;
    font-size: 12px;
    color: ${({theme}) => theme.COLORS.PINK_400};
  }
`