import styled from "styled-components";

export const Container = styled.div`
  grid-area: 'title-navigate';

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 32px 0 8px 0;
  padding: 0 32px;

  font-family: 'Poppins', sans-serif;

  p, button{
    font-size: 20px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.GRAY_700};
  }

  p{
    width: 100%;
    text-align: left;
  }

  button{
    width: 100%;

    text-align: right;

    border: none;

    background-color: transparent;
  }


`