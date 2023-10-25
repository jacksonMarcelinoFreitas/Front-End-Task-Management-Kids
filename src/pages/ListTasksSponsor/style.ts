import cardImage from '../../assets/child-task.svg';
import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: 64px min-content auto;
  grid-template-areas:
  "header"
  "title-navigate"
  "list-child";

  color: ${({theme}) => theme.COLORS.GRAY_700};

  .border-dashed{
    margin-top: 32px;
  }

  .message{
    font-weight: 500;
    line-height: 22px;
    text-align: center;
  }

  .title-navigate{
    grid-area: 'title-navigate';

    display: flex;
    align-items: center;
    justify-content: space-between;

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

  img{
    width: clamp(183px, 40%, 350px);
  }

  .card-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    grid-area: 'list-child';

    margin: 0 16px 32px 16px;

    .box-performed, .box-not-performed{
      width: 100%;
    }


    .tasks-perfomed, .tasks-unperfomed, .total-value{
      width: 100%;

      text-align: left;
      font-weight: 500;
      line-height: 18px;

      padding-left: 8px;
      padding-right: 8px;
    }

    .box-title-tasks-perfomed{
      width: 100%;
    }

    .total-value{
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 14px;
      margin-top: 4px;
    }


  }
`

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 96px;
  padding: 0 32px;

  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: ${({theme}) => theme.COLORS.WHITE};

  background-position: 9px 12px;
  background-repeat: no-repeat, repeat;
  background-image: url(${cardImage});
  background-color: ${({theme}) => theme.COLORS.TURQUOSE_400};

  border-radius: 12px;
  border: 2px solid  ${({theme}) => theme.COLORS.TURQUOSE_700};

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