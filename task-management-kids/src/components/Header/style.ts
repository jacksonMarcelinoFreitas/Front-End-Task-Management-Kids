import styled from "styled-components";

export const Container = styled.header`
  grid-area: 'header';

  height: 64px;
  /* width: 100vw; */

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */

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