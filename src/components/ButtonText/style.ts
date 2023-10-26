import styled from 'styled-components';

export const Container = styled.button`
  font-size: 20px !important;
  font-weight: 600;
  text-align: center;

  padding: 0 16px;

  background: transparent;
  color: ${({theme}) => theme.COLORS.VIOLET_400} ;
`
