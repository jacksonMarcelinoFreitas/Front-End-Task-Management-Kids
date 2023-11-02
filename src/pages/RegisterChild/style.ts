import styled from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: 6.4rem min-content auto;
  grid-template-areas:
  "header"
  "title-navigate"
  "border-dashed";

  height: 100%;

  padding: 0 0px 3.2rem 0;

  .title-navigate{
    grid-area: 'title-navigate';

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    /* padding: 0 3.2rem; */
    margin: 3.2rem 0 .8rem 0;

    font-family: 'Poppins', sans-serif;

    button, p{
      font-size: 2rem;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

  }

  .wrapper-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 0 3.2rem;
  }

  .box-container{
    width: 100%;
  }

  .border-dashed{
    width: 100%;
  }

  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: .8rem;

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
      width: 70%;
    }

  }

  @media ${device.laptop} {
    .wrapper-container{
      padding: 0 10.8rem;
    }

    .box-container{
      width: 70%;
    }

  }

  @media ${device.laptopL} {
    .wrapper-container{
      padding: 0 10.8rem;
    }

    .box-container{
      width: 50%;
    }
  }

`