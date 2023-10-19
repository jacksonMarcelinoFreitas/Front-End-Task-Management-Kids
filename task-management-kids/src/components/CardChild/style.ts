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
    gap: 4px;

    width: 100%;

    .box-left{
      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 82px;
      width: 100%;
      padding: 0 16px;

      color: ${({theme}) => theme.COLORS.WHITE};
      background-color: ${({theme}) => theme.COLORS.PINK_100};

      border-radius: 12px 0 0 12px;

      .intern-box-left, .intern-box-right{
        display: flex;
        align-items: start;
        justify-content: left;
        flex-direction: column;
        gap: 4px;

        line-height: 20px;

        p{
          font-size: 16px;
        }

        span{
          font-size: 12px;
        }
      }

      .intern-box-right{
        align-items: center;

        p{
          font-size: 32px;
        }

        span{
          font-size: 12px;
        }
      }

    }
  }

  &:not(:last-child)::after {
    content: '';
    width: 98%;
    margin: 4px 0 4px 0;
    border-bottom: 2px dashed ${({theme}) => theme.COLORS.TURQUOSE_400};
  }



`

export const StyledCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;

  border: none;
  border-radius: 0 12px 12px 0;

  line-height: 16px;

  width: 96px;
  height: 82px;
  padding: 0 12px;

  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.VIOLET_400};

  span{
    font-size: 12px;
  }

`
