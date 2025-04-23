import { Input, InputTop } from './styles';

function GlobalInput({ grey }) {
  return (
    <>
      {' '}
      {grey ? (
        <InputTop placeholder="Digite seu E-mail ou Cpf" />
      ) : (
        <Input type="password" placeholder="Digite sua senha" />
      )}
    </>
  );
}

export default GlobalInput;
