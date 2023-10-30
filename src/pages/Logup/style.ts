import { device } from "../../utils/device";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  width: 100vw;
  height: 100%;

  padding: 3.2rem;

  img{
    width: clamp(20rem, 25vw, 50rem);
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

  .form-container, .box-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
  }

  .form-container{
    gap: 1.6rem;

    margin: 0 2.4rem;
  }

  .box-container{
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
      width: 70%;
    }
  }

  @media ${device.tablet} {
    .form-container{
      width: clamp(50%, 70%, 80%);
    }
  }

  @media ${device.laptop} {
    flex-direction: row;
    gap: 10.8rem;

    .form-container{
      width: 40%;
    }
  }






`