import styled from 'styled-components';
import Study from '../../assets/study.png';

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Button = styled.button`
  width: 95px;
  height: 34px;
  margin: 12px 0 70px 27px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 23px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.8;
    color: #008000;
  }
`;

export const ContainerHeader = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: #fff;
  height: 100vh;

  input {
    margin-top: 5px;
  }

  button {
    margin-top: 40px;
  }

  img {
    width: 12%;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 26px 0;
  }
`;

export const RightImage = styled.div`
  background-image: url(${Study});
  flex: 1;
  background-size: cover;
  background-position: center;
`;
