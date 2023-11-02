import { device } from "../../utils/device";
import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 6.4rem;
  .form-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    gap: .8rem;

    width: 100%;
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