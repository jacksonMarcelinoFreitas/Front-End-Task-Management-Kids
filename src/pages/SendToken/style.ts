import { device } from "../../utils/device";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  width: 100%;
  height: 100%;
  padding: 0 2.4rem;

  img{
    width: clamp(20rem, 40%, 50rem);
  }

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .8rem;

    width: 100%;
  }

  p{
    margin-bottom: 1.6rem;

    font-size: clamp(2rem, 2.4vw, 2.4rem);
    font-weight: 400;
    line-height: 2.4rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }

  .box-buttons, .box-inputs{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    gap: .8rem;
  }

  .box-buttons{
    align-items: end;
    justify-content: right;

    button{
      font-size: clamp(1.2rem, 1.6rem, 2rem);
    }
  }

  @media ${device.mobileL} {
    form{
      width: 70%;
    }
  }

  @media ${device.tablet} {
    form{
      width: clamp(50%, 70%, 80%);
    }
  }

  @media ${device.laptop} {
    flex-direction: row;
    gap: 10.8rem;

    form{
      width: 40%;
    }
  }


`