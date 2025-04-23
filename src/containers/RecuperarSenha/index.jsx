import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
import {
  Button,
  ContainerHeader,
  ContainerInfo,
  PageContainer,
  RightImage,
} from './styles';
import GlobalButton from '../../components/Button';
import GlobalInput from '../../components/Input';

function RecuperarSenha() {
  const navegate = useNavigate();
  return (
    <PageContainer>
      <ContainerHeader>
        <Header />
        <Button onClick={() => navegate('/')}>
          <VscArrowLeft />
          Voltar
        </Button>
        <ContainerInfo>
          <h2>Recuperação de acesso</h2>
          <p>
            Olá! informe o e-mail ou Cpf que você utiliza para acessar a
            plataforma
          </p>
          <label>
            E-mail ou Cpf
            <GlobalInput grey />
          </label>
          <GlobalButton green>Enviar</GlobalButton>
        </ContainerInfo>
      </ContainerHeader>

      <RightImage />
    </PageContainer>
  );
}

export default RecuperarSenha;
