import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  margin: 0 16px;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  font-size: 20px;
  color: white;

  cursor: pointer;

  border-radius: 12px;

  > svg {
    margin-left: 20px;
  }

  &:hover {
    background-color: black;
  }
`;