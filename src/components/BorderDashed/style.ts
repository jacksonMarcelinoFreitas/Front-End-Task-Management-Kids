import styled from "styled-components";

export const Container = styled.div`
  grid-area: 'border-dashed';

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: fit-content;

  padding: 16px;
  margin: 0 32px;

  border-radius: 12px;
  border: 2px dashed ${({theme}) => theme.COLORS.TURQUOSE_400};
`