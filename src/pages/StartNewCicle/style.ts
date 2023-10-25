import styled from "styled-components";
import check from "../../assets/check.svg";
import uncheck from "../../assets/uncheck.svg";

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
gap: 12px;

text-align: center;

width: 100vw;
height: 100vh;
padding: 24px 32px;

.box-content{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  h1{
    font-weight: 600;
    line-height: 36px;
  }
}

.box-alert{
  p{
    text-align: center;
    font-size: 12px;
  }
  span{
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.TURQUOSE_700};
  }
}

.box-inputs{
  display: flex;
  gap: 16px;
}

.box-input, .box-options{
  display: flex;
  gap: 4px;
  align-items: center;
}

.box-options{
  flex-direction: column;

  line-height: 20px;
  font-size: 14px;
}

input[type="radio"] {
  appearance: none;

  -webkit-appearance: none;
  -moz-appearance: none;

  width: 20px;
  height: 20px;

  background-image: url(${uncheck});
  background-position: center;
  background-size: cover;
}

input[type="radio"]:checked {
  background-image: url(${check});
  background-position: center;
  background-size: cover;
}

`