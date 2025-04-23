import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/router';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Papiro-Inteligente">
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>,
);
