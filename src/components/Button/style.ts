import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  color: ${({theme}) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.VIOLET_700};

  border-radius: 0.8rem;

  padding: 1.6rem 1.2rem;
  width: 100%;

  .loaderButton, .valueButton{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .valueButton{
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  &.disabled-button {
    opacity: 70%;
  }


`
