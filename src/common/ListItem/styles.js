import styled from 'styled-components';

export const Item = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  strong:not(:first-child) {
    margin-top: 32px;
    line-height: 21px;
    font-size: 16px;
  }

  p {
    color: #737380;
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;

    &:hover {
      opacity: 0.8;
    }
  }
`;
