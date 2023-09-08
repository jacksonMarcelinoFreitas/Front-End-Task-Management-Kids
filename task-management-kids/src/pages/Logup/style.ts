import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 24px;

  h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  p{
    color: ${({ theme }) => theme.COLORS.PINK_400};
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    line-height: 14px;
  }

  .input-container, .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  .input-container{
    gap: 16px;

    margin: 0 24px;
    max-width: 300px;
    min-width: 200;
  }

  .box-container{
    gap: 8px;
  }




`