import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #212121;
  max-width: 600px;
  line-height: 56px;

  margin-top: 86px;

  @media (max-width: 600px) {
    margin-top: 56px;
  }
`;

export const InputSearchContent = styled.div`
  margin-top: 32px;
  max-width: 700px;
`;

export const List = styled.div`
  margin-top: 90px;
  max-width: 700px;

  @media (max-width: 600px) {
    margin-top: 60px;
  }

  a {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    padding-right: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 128px;
      height: 128px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border: 1px solid #eeeeee;
      object-fit: cover;
    }

    div {
      margin: 0 24px;
      flex: 1;

      strong {
        font-size: 24px;
        color: #424242;
      }
    }

    svg {
      margin-left: auto;
      color: #bdbdbd;
    }
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 32px;
`;

export const Message = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;

  span {
    max-width: 450px;
    font-size: 24px;
    color: #424242;
    text-align: center;
  }
`;
