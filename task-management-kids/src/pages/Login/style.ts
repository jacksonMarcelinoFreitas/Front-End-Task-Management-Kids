import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  width: 100vw;
  height: 100vh;

  padding: 24px 32px;

  h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  .form-container, .box-container, .box-buttons, .input-password{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
  }

  .input-password{
    gap: 4px;
  }

  .form-container{
    gap: 16px;

    margin: 0 24px;
    max-width: 100%;
    min-width: 200px;
  }

  .box-container{
    gap: 8px;
  }


  .box-buttons{
    flex-direction: row;
    width: 100%;
  }

`