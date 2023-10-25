import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: 64px min-content auto;
  grid-template-areas:
  "header"
  "title-navigate"
  "border-dashed";

  height: 100%;

  padding: 0 0px 32px 0;

  .title-navigate{
    grid-area: 'title-navigate';

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0 32px;
    margin: 32px 0 8px 0;

    font-family: 'Poppins', sans-serif;

    button, p{
      font-size: 20px;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

  }

  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    width: 100%;
  }

`