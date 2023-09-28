import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 100%;

  .box-left{
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({theme}) => theme.COLORS.PINK_100};
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 12px 0 0 12px;
    height: 82px;
    width: 100%;

    padding: 0 16px;

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

`

export const StyledCardButton = styled.button`
  border: none;
  border-radius: 0 12px 12px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  line-height: 16px;

  gap: 4px;

  width: 96px;
  height: 82px;

  padding: 0 12px;

  background-color: ${({theme}) => theme.COLORS.VIOLET_400};
  color: ${({theme}) => theme.COLORS.WHITE};

  span{
    font-size: 12px;
  }

`
