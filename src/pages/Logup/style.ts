import { device } from "../../utils/device";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  .wrapper-container, .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.2rem;
    width: 100%;
  }

  .box-container{
    flex-direction: column;
    padding: 0;
    gap: 3.2rem;
  }

  img{
    width: clamp(20rem, 40%, 50rem);
  }

  span{
    font-size: clamp(1.2rem, 1.4vw, 1.6rem);
  }

  p{
    font-size: clamp(1rem, 1.4vw, 1.6rem);
    font-weight: 500;
    text-align: center;
    line-height: 1.4rem;
    font-family: 'Poppins', sans-serif;

    color: ${({ theme }) => theme.COLORS.PINK_400};
  }

  .form-container, .box-buttons{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
  }

  .form-container{
    gap: 1.6rem;

  }

  .box-buttons{
    gap: .8rem;
  }

  button[type='button']{
    border: none;

    font-size: 1.6rem;

    background: none;
    color: ${({ theme }) => theme.COLORS.VIOLET_400};
  }


  @media ${device.mobileL} {
    .form-container{
      width: 80%;
    }
  }

  @media ${device.tablet} {
    .wrapper-container{
      padding: 0 6.4rem;
      height: 100vh;
    }

    .box-container{
      flex-direction: row;
      gap: 6.4rem;
    }

    .form-container{
      width: 100%;
    }
  }

  @media ${device.laptop} {
    .wrapper-container{
      padding: 0 10.8rem;
      height: 100vh;
    }

    .box-container{
      flex-direction: row;
      gap: 6.4rem;
    }

    .form-container{
      width: 50%;
    }
  }

  @media ${device.laptopL} {
    .wrapper-container{
      padding: 0 10.8rem;
      height: 100vh;
    }

    .box-container{
      flex-direction: row;
      gap: 6.4rem;
    }

    .form-container{
      width: 40%;
    }

  }

`