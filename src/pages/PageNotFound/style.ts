import styled from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`

  .wrapper-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.4rem;

    height: 100vh;
    width: 100%;

    padding: 0 3.2rem;
  }


  img{
    width: clamp(20rem, 90vw, 50rem);
  }

  @media ${device.mobileL} {
    .wrapper-container{
      padding: 0 6.4rem;
    }


    .button{
      width: clamp(40rem, 90vw, 50rem);
    }



  }

  @media ${device.tablet} {
    .wrapper-container{
      padding: 0 6.4rem;
    }

    .box-container{
      width: 50%;
    }

    .button{
      width: clamp(40rem, 90vw, 50rem);
    }


  }

  @media ${device.laptop} {
    .wrapper-container{
      padding: 0 10.8rem;
    }

    .box-container{
      width: 50%;
    }

    .button{
      width: clamp(40rem, 90vw, 50rem);
    }

  }

  @media ${device.laptopL} {
    .wrapper-container{
      padding: 0 10.8rem;
    }

    .box-container{
      width: 50%;
    }

    .button{
      width: clamp(40rem, 90vw, 50rem);
    }


  }

`