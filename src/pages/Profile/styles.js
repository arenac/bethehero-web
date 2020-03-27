import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 64px;
  }

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }
  }
`;

export const Button = styled(Link)`
  width: 260px;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 0;
  margin-left: auto;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#e02041')};
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;
