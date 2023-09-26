import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  grid-area: 'border-dashed';

  height: fit-content;

  padding: 16px;
  margin: 0 32px;

  border: 2px dashed ${({theme}) => theme.COLORS.TURQUOSE_400};
  border-radius: 12px;

`