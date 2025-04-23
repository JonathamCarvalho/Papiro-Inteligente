import styled from 'styled-components';

export const ButtonGreen = styled.button`
  cursor: pointer;
  border: none;
  background: #008000;
  border-radius: 11px;
  width: 200px;
  height: 34px;
  font-size: 17px;
  color: #ffff;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
  }
`;

export const ButtonWhite = styled.button`
  width: 200px;
  height: 34px;
  font-size: 15px;
  border: none;
  background: transparent;
  margin-top: 120px;
  color: #ffff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
    color: #00ff;
  }
`;
