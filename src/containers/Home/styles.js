import styled from 'styled-components';
import Study from '../../assets/study.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Info = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 40px;
  color: #ffff;
  h3 {
    margin-bottom: 8px;
    font-size: 18px;
  }
`;

export const ContainerAcesso = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin: 10px;
    font-size: 14px;
    color: #fff;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 0;
  color: #fff;
`;

export const ButtonSenha = styled.button`
  border: none;
  background: transparent;
  border-bottom: 2px solid #fff;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  color: #ffff;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
    color: #00ff;
  }
`;

export const Background = styled.div`
  background-image: url(${Study});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
`;

export const ButtonSecundario = styled.button`
  width: 200px;
  height: 8px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background: transparent;
  margin-top: 144px;
  color: #ffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
    color: #00ff;
  }
`;
