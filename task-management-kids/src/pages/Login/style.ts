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

  .form-container, .box-container, .box-buttons, .input-password{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  .input-password{
    gap: 4px;
  }

  .form-container{
    gap: 16px;

    margin: 0 24px;
    max-width: 300px;
    min-width: 200;
  }

  .box-container{
    gap: 8px;
  }


  .box-buttons{
    flex-direction: row;
    width: 100%;
  }

`