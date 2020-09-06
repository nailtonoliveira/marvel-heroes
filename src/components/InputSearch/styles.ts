import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;

  input {
    flex: 1;
    height: 64px;
    padding: 0 20px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #424242;
    border-right: 0pc;

    &::placeholder {
      color: #bdbdbd;
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 0 18px;
    background: #e53935;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: #c62828;
    }

    span {
      margin-left: 16px;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;
