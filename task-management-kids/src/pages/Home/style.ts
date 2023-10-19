import cardImage from '../../assets/card-button-child-boy-girl.svg';
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 96px;
  padding: 0 32px;

  position: relative;

  font-size: 16px;
  line-height: 20px;
  text-align: center;

  background-image: url(${cardImage});
  background-repeat: no-repeat, repeat;
  background-position: -16px 8px;
  background-color: ${({theme}) => theme.COLORS.PINK_100};

  color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: 12px;
  border: 2px solid  ${({theme}) => theme.COLORS.PINK_400};

  overflow: hidden;

  .icon-plus{
    font-size: 36px;
    color: ${({theme}) => theme.COLORS.VIOLET_700};
  }

  p{
    max-width: fit-content;
    word-break: break-word;
  }

`