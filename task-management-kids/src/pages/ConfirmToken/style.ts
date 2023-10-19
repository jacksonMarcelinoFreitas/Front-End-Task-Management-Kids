import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
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
    align-items: end;
    justify-content: right;

    button{
      font-size: 16px;
    }
  }

`