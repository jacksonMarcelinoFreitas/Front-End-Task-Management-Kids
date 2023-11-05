import { device } from "../../utils/device";
import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 3.2rem;

  .wrapper-container{
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 3.2rem;
  }

  .intern-container{
    width: 100%;
  }

  .box-container{
    display: grid;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;

  }

  .container-title, .container-description, .container-reward{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    box-shadow: .4rem .4rem .8rem rgba(0,0,0,0.25);

    text-align: center;

    border-radius: 1.2rem;

    height: 100%;
  }

  .container-title{
    grid-area: 'name';
  }
  .container-reward{
    grid-area: 'reward';
  }
  .container-description{
    grid-area: 'description';
  }

  .title-name, .title-description, .title-reward, .value{
    width: 100%;
    padding: 1.6rem;
  }

  .title-name, .title-description, .title-reward{
    position: relative;

    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 13rem;
    font-size: 1.4rem;
    font-weight: bold;

    color: ${({theme}) => theme.COLORS.WHITE};

    box-shadow: rgba(0,0,0,0.25) .0rem .6rem .4rem;

    border-radius: 1.2rem 1.2rem 0 0;

    overflow: hidden;

    font-size: 1.6rem;
  }

  .title-name{
    background-color: ${({theme}) => theme.COLORS.VIOLET_100};
  }
  .title-description{
    background-color: ${({theme}) => theme.COLORS.PINK_100};
  }
  .title-reward{
    background-color: ${({theme}) => theme.COLORS.TURQUOSE_100};
  }

  .value{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.WHITE};

    border-radius: 0 0 1.2rem 1.2rem;

    color: ${({theme}) => theme.COLORS.GRAY_700};

    word-wrap: break-word;

  }

  .absolute{
    position: absolute;
  }

  //CARD NAME
  .boy_image{
    left: -.8rem;
    bottom: -.2rem;
    z-index: -1;
    width: fit-content;
  }
  .girl_image{
    right: -2.4rem;
    bottom: -.2rem;
    z-index: -1;
  }
  .boll_soap_left_image{
    bottom: 0;
    left: -.5rem;
    z-index: 0;
  }
  .boll_soap_right_image{
    bottom: -2.0rem;
    right: 0;
    z-index: -4;
  }
  .cloud_soap_image{
    right: 0;
    bottom: -2.4rem;
  }
  .floor_cyan, .floor_green{
    bottom: .0rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 3.2rem;
    background-color: ${({theme})=> theme.COLORS.CYAN_700};
    z-index: -6;
  }
  .floor_green{
    background-color: #0E9262;
  }

  //DESCRIPTION CARD
  .girl_left_image{
    left: -1.4rem;
    bottom: -1.2rem;
    z-index: -1;
  }
  .sheet_girl_right_image{
    right: .0rem;
    bottom: .0rem;
    z-index: -1;
  }

  //REWARD CARD
  .mom_girl_money_left_image{
    left: -1.4rem;
    bottom: -1.2rem;
    z-index: -1;
  }
  .sheet_right_side{
    right: -2.8rem;
    bottom: -2.4rem;
    z-index: -1;
  }

  .custom-modal{
    position: absolute;
    z-index: 1000;
  }

  @media ${device.mobileL} {
    .wrapper-container{
      height: 80vh;
      padding: 0 3.2rem;
    }

    .intern-container{
      width: 100%;
      height: 100%;

      display: flex;
      align-items: stretch;
      flex-direction: column;
      justify-content: center;
    }

    .box-container{
      height: 70%;
      /* grid-template-columns: 1fr 1fr; */
      column-gap: 1.6rem;
      grid-template:
      "name reward"
      "description description"
      / 1fr 1fr;

      .container-description{
        grid-column: 1 / 3;
      }
    }

    .title-name, .title-description, .title-reward{
      height: 70%;
      font-size: clamp(1.4rem, 1.9vw, 2.4rem);
    }

    .value{
      font-size: clamp(1.4rem, 1.9vw, 2.4rem);
      height: 30%;
    }

  }

  @media ${device.tablet} {
    .wrapper-container{
      height: 80vh;
      padding: 0 6.4rem;
    }

    .intern-container{
      width: 90%;
      height: 100%;

      display: flex;
      align-items: stretch;
      flex-direction: column;
      justify-content: center;
    }

    .box-container{
      height: 70%;
      /* grid-template-columns: 1fr 1fr; */
      column-gap: 1.6rem;
      grid-template:
      "name reward"
      "description description"
      / 1fr 1fr;

      .container-description{
        grid-column: 1 / 3;
      }
    }

    .title-name, .title-description, .title-reward{
      /* height: 70%; */
      font-size: clamp(1.4rem, 1.9vw, 2.4rem);
    }

    .value{
      font-size: clamp(1.4rem, 1.9vw, 2.4rem);
      /* height: 30%; */
    }

  }

  @media ${device.laptop} {
    .wrapper-container{
      height: 80vh;
      padding: 0 10.8rem;
    }

    .intern-container{
      width: 80%;
      height: 100%;

      display: flex;
      align-items: stretch;
      flex-direction: column;
      justify-content: center;
    }

    .box-container{
      height: 100%;
      /* grid-template-columns: 1fr 1fr; */
      column-gap: 1.6rem;
      grid-template:
      "name reward"
      "description description"
      / 1fr 1fr;

      .container-description{
        grid-column: 1 / 3;
      }
    }

    .title-name, .title-description, .title-reward{
      /* height: 70%; */
      font-size: clamp(1.4rem, 1.6vw, 2.4rem);
    }

    .value{
      font-size: clamp(1.4rem, 1.6vw, 2.4rem);
      /* height: 30%; */
    }
  }

  @media ${device.laptopL} {
    .wrapper-container{
      height: 80vh;
      padding: 0 10.8rem;
    }

    .intern-container{
      width: 60%;
      height: 100%;

      display: flex;
      align-items: stretch;
      flex-direction: column;
      justify-content: center;
    }

    .box-container{
      height: 100%;
      /* grid-template-columns: 1fr 1fr; */
      column-gap: 1.6rem;
      grid-template:
      "name reward"
      "description description"
      / 1fr 1fr;

      .container-description{
        grid-column: 1 / 3;
      }
    }

    .title-name, .title-description, .title-reward{
      height: 70%;
      font-size: clamp(1.4rem, 1.5vw, 2.4rem);
    }

    .value{
      font-size: clamp(1.4rem, 1.2vw, 2.4rem);
      height: 30%;
    }

  }

`