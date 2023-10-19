import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  width: 100vw;
  padding: 32px 32px;

  h1{
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  p{
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    line-height: 14px;
    font-family: 'Poppins', sans-serif;

    color: ${({ theme }) => theme.COLORS.PINK_400};
  }

  .form-container, .box-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
  }

  .form-container{
    gap: 16px;

    margin: 0 24px;
  }

  .box-container{
    gap: 8px;
  }

  button[type='button']{
    border: none;

    font-size: 16px;

    background: none;
    color: ${({ theme }) => theme.COLORS.VIOLET_400};
  }






`