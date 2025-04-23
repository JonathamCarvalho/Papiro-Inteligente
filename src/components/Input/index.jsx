import { Input, InputTop } from './styles';

function GlobalInput({ grey }) {
  return (
    <>
      {' '}
      {grey ? (
        <InputTop placeholder="Digite seu E-mail ou Cpf" />
      ) : (
        <Input placeholder="Digite sua senha" />
      )}
    </>
  );
}

export default GlobalInput;
