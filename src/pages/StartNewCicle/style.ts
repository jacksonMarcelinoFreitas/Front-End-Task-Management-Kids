import styled from "styled-components";
import check from "../../assets/check.svg";
import uncheck from "../../assets/uncheck.svg";
import { device } from "../../utils/device";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;

  text-align: center;

  width: 100vw;
  height: 100vh;
  padding: 2.4rem 3.2rem;

  img{
    width: clamp(15rem, 20vw, 35rem );
  }

.box-content{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;

  h1{
    font-weight: 600;
    line-height: 3.6rem;
  }
}

.box-alert{
  p{
    text-align: center;
    font-size: clamp(1.2rem, 1.2vw, 2rem);
  }
  span{
    font-size: clamp(1.4rem, 1.6vw, 2.4rem);
    color: ${({theme}) => theme.COLORS.TURQUOSE_700};
  }
}

.box-inputs{
  display: flex;
  gap: 2.4rem;
}

.box-buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: .8rem;
}

.box-input, .box-options{
  display: flex;
  gap: 1.2rem;
  align-items: center;
}

.box-options{
  flex-direction: column;

  line-height: 2rem;
  font-size: 1.4rem;

  > p{
    color: ${({theme}) => theme.COLORS.VIOLET_700};
    text-align: center;
    font-size: clamp(1.6rem, 1.2vw, 2rem);
  }
}

input[type="radio"] {
  appearance: none;

  -webkit-appearance: none;
  -moz-appearance: none;

  width: 2rem;
  height: 2rem;

  background-image: url(${uncheck});
  background-position: center;
  background-size: cover;
}

input[type="radio"]:checked {
  background-image: url(${check});
  background-position: center;
  background-size: cover;
}

  @media ${device.mobileL} {
    img{
      width: clamp(20rem, 20vw, 35rem );
    }
    .box-buttons{
      align-items: end;
    }
  }

  @media ${device.tablet} {
    img{
      width: clamp(20rem, 20vw, 35rem );
    }

    .box-buttons{
      align-items: end;
    }
  }

  @media ${device.laptop} {
    img{
      width: clamp(20rem, 20vw, 35rem );
    }

    .box-buttons{
      align-items: end;
    }
  }

  @media ${device.laptopL} {
    img{
      width: clamp(20rem, 20vw, 35rem );
    }

    .box-buttons{
      align-items: end;
    }
  }

`