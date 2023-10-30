import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  .container-card{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;

    width: 100%;

    .box-left{
      display: flex;
      align-items: center;
      justify-content: space-between;


      height: 8.2rem;
      width: 100%;
      padding: 0 1.6rem;

      color: ${({theme}) => theme.COLORS.WHITE};
      background-color: ${({theme}) => theme.COLORS.PINK_100};

      border-radius: 1.2rem 0 0 1.2rem;

      .intern-box-left, .intern-box-right{
        display: flex;
        align-items: start;
        justify-content: left;
        flex-direction: column;
        gap: .4rem;

        line-height: 2rem;

        p{
          font-size: 1.6rem;
        }

        span{
          font-size: 1.2rem;
        }
      }

      .intern-box-right{
        align-items: center;

        p{
          font-size: 3.2rem;
        }

        span{
          font-size: 1.2rem;
        }
      }

    }
  }

  &:not(:last-child)::after {
    content: '';
    width: 100%;
    margin: .4rem 0 .4rem 0;
    border-bottom: .2rem dashed ${({theme}) => theme.COLORS.TURQUOSE_400};
  }

`

export const StyledCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .4rem;

  border: none;

  line-height: 1.6rem;

  width: 9.6rem;
  height: 8.2rem;
  padding: 0 1.2rem;

  border-radius: 0 1.2rem 1.2rem 0;
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.VIOLET_400};


  span{
    font-size: 1.2rem;
  }

`
