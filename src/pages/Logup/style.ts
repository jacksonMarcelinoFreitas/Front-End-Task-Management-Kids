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
    width: clamp(20rem, 30%, 50% );
  }

  h1{
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  p{
    font-size: 1.4rem;
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

    .box-buttons{
      flex-direction: row;

      button{
        padding: .8rem;
      }
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