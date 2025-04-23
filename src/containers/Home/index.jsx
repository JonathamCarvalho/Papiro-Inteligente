import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  Background,
  ButtonSecundario,
  ButtonSenha,
  Container,
  ContainerAcesso,
  ContainerButton,
  Info,
} from './styles';

import GlobalButton from '../../components/Button';
import GlobalInput from '../../components/Input';
import Header from '../../components/Header';

function Home() {
  const navigate = useNavigate();
  return (
    <Background>
      <Header />

      <Container>
        <Info>
          <h3> O seu sucesso começa aqui, boas-vindas a sua nova jornada</h3>
          <p>Insira seu E-MAIL/CPF e senha para acessar a plataforma</p>
        </Info>
        <ContainerAcesso>
          <label>
            E-MAIL OU CPF
            <GlobalInput grey />
          </label>
          <label>
            SENHA
            <GlobalInput />
          </label>
        </ContainerAcesso>
        <ContainerButton>
          <ButtonSenha onClick={() => navigate('/RecuperarSenha')}>
            Esqueceu sua senha?
          </ButtonSenha>
          <GlobalButton green>Entrar</GlobalButton>
          <a
            href="https://www.linkedin.com/in/jonatham-carvalho-b21ab61b0/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <ButtonSecundario>
              Central de ajuda <AiOutlineWhatsApp />
            </ButtonSecundario>
          </a>
        </ContainerButton>
      </Container>
    </Background>
  );
}

export default Home;
