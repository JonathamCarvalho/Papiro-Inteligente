import { ContainerImg, ContainerLogo } from './styles';
import Estudo from '../../assets/estudo.png';

function Header() {
  return (
    <ContainerImg>
      <img src={Estudo} alt="logo-estudo" />
    </ContainerImg>
  );
}

export default Header;
