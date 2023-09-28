import styled from "styled-components";

export const Container = styled.header`
  grid-area: 'header';

  height: 64px;

  border-radius: 0 0 12px 12px;

  background-color: ${({theme}) => theme.COLORS.VIOLET_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  svg {
    color: ${({theme}) => theme.COLORS.PINK_100};
  }

  .menu-icon, .logout-icon{
    transition: 30ms linear;

    &:hover{
      cursor: pointer;
      transform: scale(1.05) ;
    }
  }

`;

export const StyledModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;

  width: fit-content;

  border-radius: 16px;
  padding: 16px 32px;

  background-color: ${({theme}) => theme.COLORS.TURQUOSE_400};

  .box-buttons{
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: fit-content;
    gap: 16px;
  }

  button{
    font-size: 18px;
    text-align: center;

    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.PINK_400};

    border-radius: 8px;
    padding: 0 16px;

    height: 42px;
    width: 100%;
  }
`
