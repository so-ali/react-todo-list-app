import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { appStore } from '../store/store';

export default function AppContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <ReduxProvider store={appStore}>{children}</ReduxProvider>;
}
