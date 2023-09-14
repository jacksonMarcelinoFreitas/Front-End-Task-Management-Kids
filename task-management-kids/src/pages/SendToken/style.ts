import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 24px;

  .box-wrapper{
    display: flex;
    align-items: center;
    justify-content: right;
    flex-direction: column;
    gap: 16px;
    max-width: 257px;
    min-width: 200px;
  }

  p{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    /* font-size: clamp(1.5rem, 2.5vw, 2rem); */
    text-align: center;
    line-height: 24px;
  }

  .box-buttons, .box-inputs{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    gap: 8px;
  }

  .box-buttons{
    justify-content: right;
    align-items: end;
    button{
      font-size: 16px;
    }
  }

`