import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  color: ${({theme}) => theme.COLORS.VIOLET_700};

  padding: 0 12px;

  width: 100%;

  font-size: 12px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
`
