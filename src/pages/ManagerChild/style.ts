import styled from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: 6.4rem min-content auto;
  grid-template-areas:
  "header"
  "title-navigate"
  "cards";

  padding-bottom: 3.2rem ;

  color: ${({theme}) => theme.COLORS.GRAY_700};

  .wrapper-container{
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    padding: 0 3.2rem;
  }

  .box-container{
    width: 100%;
  }

  @media ${device.mobileL} {
    .wrapper-container{
      padding: 0 6.4rem;
    }
  }

  @media ${device.tablet} {
    .wrapper-container{
      padding: 0 10.8rem;

    }
  }

  @media ${device.laptop} {
    .wrapper-container{
      padding: 0 10.8rem;

    }
    .box-container{
      width: 80%;
    }
  }

  @media ${device.laptopL} {
    .wrapper-container{
      padding: 0 10.8rem;
    }
    .box-container{
      width: 70%;
    }
  }

`
export const BoxCards = styled.div`
  grid-area: 'cards';

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

  }
  @media ${device.laptopL} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

  }

`