import styled from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 64px min-content auto;
  grid-auto-rows: min-content;
  grid-template-areas:
  "header"
  "title-navigate"
  "border-dashed";

  height: 100%;

  padding: 0 0px 32px 0;

  .title-navigate{
    grid-area: 'title-navigate';
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 0 32px;
    margin: 32px 0 8px 0;

    font-family: 'Poppins', sans-serif;

    button, p{
      font-size: 20px;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

  }

  .wrapper-container{
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 3.2rem;
  }

  .box-container{
    width: 100%;
  }

  .box-button-form{
    display: flex;
    flex-direction: column;
    gap: .8rem;

    width: 100%;
  }

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    width: 100%;
  }

  @media ${device.mobileL} {
    .wrapper-container{
      padding: 0 6.4rem;
    }

  }

  @media ${device.tablet} {
    .wrapper-container{
      padding: 0 6.4rem;
    }

    .box-container{
      width: 80%;
    }

    .box-button-form{
      flex-direction: row;
    }
  }

  @media ${device.laptop} {
    .wrapper-container{
      padding: 0 10.8rem;
    }

    .box-container{
      width: 80%;
    }

    .box-button-form{
      flex-direction: row;
    }
  }

  @media ${device.laptopL} {
    .wrapper-container{
      padding: 0 10.8rem;
    }

    .box-container{
      width: 50%;
    }

    .box-button-form{
      flex-direction: row;
    }
  }

`