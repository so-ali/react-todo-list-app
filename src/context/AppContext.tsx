import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { appStore } from "../store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import TodosContextProvider from "./providers/TodosContextProvider";

const queryClient = new QueryClient();
export default function AppContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <ReduxProvider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <TodosContextProvider>{children}</TodosContextProvider>
      </QueryClientProvider>
      <ToastContainer position="bottom-right" />
    </ReduxProvider>
  );
}
