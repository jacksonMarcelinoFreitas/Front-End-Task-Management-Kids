import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

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

      border-radius: 12px 0 0 12px;

      height: 82px;
      width: 100%;
      padding: 0 16px;

      color: ${({theme}) => theme.COLORS.WHITE};
      background-color: ${({theme}) => theme.COLORS.VIOLET_100};

      .intern-box-left{
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
  }

  }

  &.performed:not(:last-child)::after,
  &.not-performed:not(:last-child)::after {
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

  border: none;
  border-radius: 0 12px 12px 0;

  line-height: 16px;

  gap: 4px;

  width: 96px;
  height: 82px;
  padding: 0 12px;

  background-color: ${({theme}) => theme.COLORS.PINK_400};
  color: ${({theme}) => theme.COLORS.WHITE};

  span{
    font-size: 12px;
  }

`
