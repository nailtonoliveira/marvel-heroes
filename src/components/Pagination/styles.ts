import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > span {
    margin-right: 20px;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    display: flex;
    align-items: center;

    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: #e53935;
    color: #fff;

    transition: background-color 0.2s;

    & + button {
      margin-left: 16px;
    }

    &:hover {
      background: #c62828;
    }

    span {
      font-weight: bold;
      margin: 0 8px;
    }
  }
`;
