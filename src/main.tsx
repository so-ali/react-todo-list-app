import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './root.css';
import AppContainer from './App.tsx';
import AppContextProvider from './context/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  </StrictMode>
);
