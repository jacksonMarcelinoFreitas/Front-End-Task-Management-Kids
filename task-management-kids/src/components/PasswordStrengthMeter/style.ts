import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  width: 100%;
  gap: 2px;

  font-size: 12px;
  font-family: 'Poppins',sans-serif;

  .password-strength-meter-progress {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
  }

  .password-strength-meter-progress::-webkit-progress-bar {
    background-color: ${({theme}) => theme.COLORS.TURQUOSE_400};
    border-radius: 10px;
  }

  .password-strength-meter-progress::-webkit-progress-value {
    border-radius: 10px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }

  .strength-Weak::-webkit-progress-value {
    background-color: ${({theme}) => theme.COLORS.PINK_400};
  }
  .strength-Fair::-webkit-progress-value {
  background-color: ${({theme}) => theme.COLORS.VIOLET_400};
  }
  .strength-Good::-webkit-progress-value {
  background-color: ${({theme}) => theme.COLORS.CYAN_400};
  }
  .strength-Strong::-webkit-progress-value {
  background-color: ${({theme}) => theme.COLORS.CYAN_700};
  }

`
