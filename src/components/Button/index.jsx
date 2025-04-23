import { ButtonGreen, ButtonWhite } from './styles';

function GlobalButton({ children, green }) {
  return (
    <>
      {green ? (
        <ButtonGreen> {children} </ButtonGreen>
      ) : (
        <ButtonWhite>{children}</ButtonWhite>
      )}
    </>
  );
}

export default GlobalButton;
