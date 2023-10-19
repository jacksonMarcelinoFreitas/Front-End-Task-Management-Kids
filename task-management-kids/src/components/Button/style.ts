import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({theme}) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.VIOLET_700};

  border-radius: 8px;

  padding: 12px;
  width: 100%;

  svg{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &.disabled-button {
    opacity: 70%;
  }
`
