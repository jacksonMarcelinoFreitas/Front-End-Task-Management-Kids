import styled from "styled-components";

export const Container = styled.div`
  grid-area: 'title-navigate';

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 3.2rem 0 .8rem 0;
  padding: 0 1.6rem;

  font-family: 'Poppins', sans-serif;

  p, button{
    font-size: 2rem;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.GRAY_700};
  }

  p{
    width: 100%;
    line-height: 2rem;
    text-align: left;
  }

  button{
    width: 100%;

    font-weight: 500;
    text-align: right;
    color: ${({theme}) => theme.COLORS.VIOLET_700};

    border: none;

    background-color: transparent;
  }


`