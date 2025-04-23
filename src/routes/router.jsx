import Home from '../containers/Home';
import { Routes, Route } from 'react-router-dom';
import RecuperarSenha from '../containers/RecuperarSenha';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
    </Routes>
  );
}

export default Router;
