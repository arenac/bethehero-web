import styled from 'styled-components';
import { darken } from 'polished';

export const Btn = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weigh: 700;
  margin-top: 16px;
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
