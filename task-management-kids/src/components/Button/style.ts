import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background: ${({ theme }) => theme.COLORS.VIOLET_700};
  color: ${({theme}) => theme.COLORS.WHITE};

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
