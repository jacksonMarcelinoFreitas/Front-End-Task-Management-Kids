import cardImage from '../../assets/child-task.svg';
import { device } from '../../utils/device';
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: 6.4rem min-content auto;
  grid-template-areas:
  "header"
  "title-navigate"
  "list-child";

  padding-bottom: 3.2rem;

  color: ${({theme}) => theme.COLORS.GRAY_700};

  .border-dashed{
    width: 100%;
    height: 100%;
    /* margin-top: 3.2rem; */
  }

  .message{
    font-weight: 500;
    line-height: 2.2rem;
    text-align: center;
  }

  .wrapper-container{
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 3.2rem;
  }

  .intern-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    width: 100%;
  }

  .box-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;

    width: 100%;

    img{
      width: 20rem;
    }
  }


  .box-performed, .box-not-performed{
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1.2rem;
    width: 100%;
  }

  .tasks-perfomed, .tasks-unperfomed, .total-value{
    width: 100%;

    text-align: left;
    font-weight: 500;
    line-height: 18px;

    padding-left: .8rem;
    padding-right: .8rem;
  }

  .box-title-tasks-perfomed{
    width: 100%;
  }

  .total-value{
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.4rem;
    margin-top: .4px;
  }

  @media ${device.mobileL} {
    .wrapper-container{
      padding: 0 6.4rem;
    }

    .no-registry-image{
      width: 3rem;
    }

    .box-container{
      img{
        width: clamp(20rem, 30vw, 50rem);
      }
    }

  }

  @media ${device.tablet} {
    .wrapper-container{
      padding: 0 6.4rem;
    }

    .intern-container{
      width: 80%;
    }

    .no-registry-image{
      width: 30rem;
    }

    .box-container{
      img{
        width: clamp(20rem, 30vw, 50rem);
      }
    }

  }

  @media ${device.laptop} {
    .wrapper-container{
      padding: 0 10.8rem;
    }

    .intern-container{
      width: 60%;
    }

    .border-dashed{
      padding: 3.2rem 10.8rem;
    }

    .box-container{
      img{
        width: clamp(30rem, 30vw, 50rem);
      }
    }
  }

  @media ${device.laptopL} {
    .wrapper-container{
      padding: 0 10.8rem;
    }

    .intern-container{
      width: 50%;
    }

    .border-dashed{
      padding: 3.2rem 10.8rem;
    }

    .box-container{
      img{
        width: clamp(40rem, 100%, 50rem);
      }
    }

  }
`

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 9.6rem;
  padding: 0 3.2rem;

  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;

  color: ${({theme}) => theme.COLORS.WHITE};

  background-position: -0.5rem -0.1rem;
  background-repeat: no-repeat, repeat;
  background-image: url(${cardImage});
  background-color: ${({theme}) => theme.COLORS.TURQUOSE_400};

  border-radius: 1.2rem;
  border: .2rem solid  ${({theme}) => theme.COLORS.TURQUOSE_700};

  overflow: hidden;

  .icon-plus{
    font-size: 3.6rem;
    color: ${({theme}) => theme.COLORS.VIOLET_700};
  }

  p{
    max-width: fit-content;
    word-break: break-word;
  }

`