import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    padding: 4px 8px;

    border: 0;
    color: #757575;

    svg {
      margin-right: 8px;
    }
  }
`;

export const HeroInfo = styled.div`
  margin-top: 86px;
  border-radius: 8px;
  background: #fff;

  display: flex;

  @media (max-width: 600px) {
    margin-top: 56px;
    flex-direction: column;
  }

  img {
    height: 360px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    @media (max-width: 600px) {
      border-bottom-left-radius: 0;
      border-top-right-radius: 8px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 64px 24px;

  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 24px;
  }

  > strong {
    font-size: 32px;
    color: #212121;
  }

  ul {
    display: flex;
    list-style: none;

    justify-content: space-between;

    li {
      strong {
        display: block;
        font-size: 40px;
        color: #212121;

        @media (max-width: 600px) {
          font-size: 28px;
        }
      }

      p {
        color: #616161;
      }
    }
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 90px;
`;

export const Series = styled.div`
  margin-top: 16px;

  div {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    padding-right: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + div {
      margin-top: 16px;
    }

    img {
      width: 128px;
      height: 128px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border: 1px solid #eeeeee;
      object-fit: cover;
    }

    > div {
      margin: 0 24px;
      flex: 1;

      strong {
        font-size: 24px;
        color: #424242;
      }
    }
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 32px;
`;
