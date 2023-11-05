import styled from "styled-components";
import { device } from "../../utils/device";


export const Container = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "title-navigate"
  "list-child";
  grid-auto-rows: min-content;
  grid-template-rows: 64px min-content auto;

  color: ${({theme}) => theme.COLORS.GRAY_700};

  .no-registry-image{
    width: 20rem;
  }

  .border-dashed{
    margin-top: 3.2rem;
  }

  .message{
    text-align: center;
    font-weight: 500;
    line-height: 2.2rem;
  }

  .wrapper-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    padding: 0 3.2rem;

    width: 100%;
  }

  .content-container, .intern-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.2rem;
  }

  .intern-container{
    gap: 1.6rem;
  }

  .box-cards{
    display: grid;
    align-items: center;
    justify-content: stretch;
    grid-template-columns: 1fr;


    grid-column-gap: 1.6rem;

    width: 100%;
  }

  .box-child {
    width: 100%;
  }

  img{
    width: 18rem;
  }

  .card-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;

    width: 100%;
  }

  @media ${device.mobileL} {
    .border-dashed{
      padding: 3.2rem;
    }

    .no-registry-image{
      width: clamp(20rem, 40vw, 50rem);
    }
  }

  @media ${device.tablet} {
    .wrapper-container{
      padding: 0 6.4rem;
    }

    .box-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50%, 50%));
    }

    .box-child:nth-child(odd):last-child {
      grid-column: span 2;
    }

    .border-dashed{
      padding: 6.4rem 10.8rem;
    }

    .no-registry-image{
      width: clamp(30rem, 30vw, 50rem);
    }
  }

  @media ${device.laptop} {
    .card-container{
      width: 70%;
    }

    .box-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50%, 50%));
    }

    .box-child:nth-child(odd):last-child {
      grid-column: span 2;
    }

    .no-registry-image{
      width: clamp(30rem, 30vw, 50rem);
    }

    .border-dashed{
      width: fit-content;
      padding: 6.4rem 10.8rem;
    }
  }

  @media ${device.laptopL} {
    .card-container{
      width: 60%;
    }

    .box-cards {
      grid-template-columns: repeat(auto-fill, minmax(50%, 50%));
    }

    .box-child:nth-child(odd):last-child {
      grid-column: span 2;
    }


    .no-registry-image{
      width: clamp(30rem, 30vw, 50rem);
    }

    .border-dashed{
      padding: 6.4rem 10.8rem;
    }
  }
`

export const CardButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 9.6rem;
  padding: 0 3.2rem;

  font-size: 1.6rem;
  line-height: 2.0rem;
  text-align: center;

  .girlLeft, .boyRight{
    position: absolute;
    width: 15rem;
    z-index: 1;
  }

  .girlLeft{
    left: -3rem;
    width: 19rem;
    bottom: -3rem;
  }

  .boyRight{
    right: -.7rem;
    width: 12rem;
    bottom: -3rem;
  }


  color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: 1.2rem;
  border: .2rem solid  ${({theme}) => theme.COLORS.PINK_400};
  background-color: ${({theme}) => theme.COLORS.PINK_100};

  overflow: hidden;

  .icon-plus{
    font-size: 3.6rem;
    color: ${({theme}) => theme.COLORS.VIOLET_700};
    z-index: 2;
  }

  p{
    max-width: fit-content;
    word-break: break-word;
    z-index: 2;
  }



`