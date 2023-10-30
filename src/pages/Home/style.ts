import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "title-navigate"
  "list-child";
  grid-auto-rows: min-content;
  grid-template-rows: 64px min-content auto;

  color: ${({theme}) => theme.COLORS.GRAY_700};

  .border-dashed{
    margin-top: 32px;
  }

  .message{
    text-align: center;
    font-weight: 500;
    line-height: 22px;
  }

  .title-navigate{
    display: flex;
    align-items: center;
    justify-content: space-between;

    grid-area: 'title-navigate';

    width: 100%;

    padding: 0 32px;
    margin: 32px 0 8px 0;

    button, p{
      font-size: 20px;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

  }

  .box-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    width: 100%;
  }

  .box-card{
    width: 100%;
  }

  img{
    width: clamp(183px, 40%, 350px);
  }

  .card-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    grid-area: 'list-child';

    margin: 0 16px 32px 16px;
  }
`

export const CardButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 96px;
  padding: 0 32px;

  font-size: 16px;
  line-height: 20px;
  text-align: center;

  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);

  .girlLeft, .boyRight{
    position: absolute;
    width: 15rem;
    z-index: 1;
  }

  .girlLeft{
    left: -3rem;
    width: 19rem;
    bottom: -3rem;
  }

  .boyRight{
    right: -.7rem;
    width: 12rem;
    bottom: -3rem;
  }


  color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: 12px;
  border: 2px solid  ${({theme}) => theme.COLORS.PINK_400};
  background-color: ${({theme}) => theme.COLORS.PINK_100};

  overflow: hidden;

  .icon-plus{
    font-size: 36px;
    color: ${({theme}) => theme.COLORS.VIOLET_700};
    z-index: 2;
  }

  p{
    max-width: fit-content;
    word-break: break-word;
    z-index: 2;
  }

`