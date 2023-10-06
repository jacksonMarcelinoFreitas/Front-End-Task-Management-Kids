import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: 64px min-content auto;
  grid-template-areas:
  "header"
  "title-navigate"
  "cards";

  grid-area: 'cards';

  color: ${({theme}) => theme.COLORS.GRAY_700};

`
export const BoxCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  padding: 0 16px;
`