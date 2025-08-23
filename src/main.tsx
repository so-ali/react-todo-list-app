import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './App.tsx';
import AppContextProvider from './context/AppContext.tsx';
import './assets/styles/root.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  </StrictMode>
);
