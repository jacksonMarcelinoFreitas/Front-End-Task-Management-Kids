import styled from 'styled-components';

export const Container = styled.div`
  /* display: grid; */
  position: fixed;
  overflow: hidden;

  grid-template-areas:
  "header"
  "list-nav";

  z-index: 10;

  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;

  animation: showSidebar .4s;

  background: linear-gradient(${({theme}) => theme.COLORS.VIOLET_100}, ${({theme}) => theme.COLORS.VIOLET_400});

  .header-menu{
    display: flex;
    align-items: center;
    justify-content: start;

    padding: 0 16px;

    background-color: ${({theme}) => theme.COLORS.VIOLET_400};
    height: 64px;

    border-radius: 0 0 12px 12px;

    > svg {
      cursor: pointer;
      color: ${({theme}) => theme.COLORS.PINK_100};

    }
  }

  .image-background{
    position: absolute;
    z-index: -1;

    width: 100%;
    bottom: 0;
    left: 0;

    opacity: 0.3;
  }


  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }

  }
`;

export const Content = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;