import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 24px;

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    height: 100vh;
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
    flex-direction: column;
    justify-content: center;
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