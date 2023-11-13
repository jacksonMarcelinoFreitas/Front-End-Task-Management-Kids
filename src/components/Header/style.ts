import styled from "styled-components";

export const Container = styled.header`
  grid-area: 'header';

  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 2.4rem;

  height: 64px;
  padding: 0 24px;

  border-radius: 0 0 12px 12px;

  background-color: ${({theme}) => theme.COLORS.VIOLET_700};

  .name{
    width: 100%;
    color: ${({theme}) => theme.COLORS.TURQUOSE_100};

    span{
      font-weight: 300;
      font-size: 1.6rem;
    }

    p{
      display: inline;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }

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
  padding: 16px 32px;

  border-radius: 16px;

  background-color: ${({theme}) => theme.COLORS.TURQUOSE_400};

  .box-buttons{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 16px;

    width: 100%;
    height: fit-content;
  }

  button{
    font-size: 18px;
    text-align: center;

    height: 42px;
    width: 100%;
    padding: 0 16px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.PINK_400};

    border-radius: 8px;
  }
`
