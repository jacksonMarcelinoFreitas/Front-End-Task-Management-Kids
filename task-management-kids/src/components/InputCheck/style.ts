import uncheck from '../../assets/uncheck.svg'
import check from '../../assets/check.svg'
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 8px;

  input{
    width: 20px;
    height: 20px;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: url(${uncheck});
    background-position: center;
    background-size: cover;
  }

  input:checked {
    background-image: url(${check});
    background-position: center;
    background-size: cover;
  }

  label{
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
  }

`