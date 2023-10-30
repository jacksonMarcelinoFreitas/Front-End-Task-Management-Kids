import styled from "styled-components";
import { device } from '../../utils/device';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  width: 100vw;
  height: 100vh;

  padding: 2.4rem 3.2rem;

  img{
    width: clamp(20rem, 40%, 50rem);
  }

  .form-container, .box-container, .box-buttons, .input-password{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }

  .form-container{
    gap: 3.2rem;

    max-width: 100%;
    min-width: 200px;
  }

  .box-container{
    gap: 8px;
  }

  .box-buttons{
    flex-direction: row;

    width: 100%;

    button{
      margin-top: 32px;
      font-size: clamp(1.2rem, 1.6rem, 2rem);
      line-height: 1.6rem;

      border: none;

      background: none;
      color: ${({ theme }) => theme.COLORS.VIOLET_400};
    }
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