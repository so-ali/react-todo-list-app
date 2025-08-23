import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './App.tsx';
import AppContextProvider from './context/AppContext.tsx';
import './assets/styles/root.css';

const rootDOM = document.getElementById('root');
if (!rootDOM) {
  throw new Error('Root element not found!');
}
createRoot(rootDOM).render(
  <StrictMode>
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  </StrictMode>
);
