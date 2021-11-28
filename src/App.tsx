import React from "react";

import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";


import { useAuth } from "./hooks/useAuth";

import { Header } from "@/components/Header/Header.component";
import store from "@/redux";

import { useNavigate } from "react-router-dom";

export default function App(props: any) {
  let navigate = useNavigate();
  const handlerClick = () => {
    navigate('/about')
  }
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <Header />
        <button onClick={handlerClick}>Submit</button>
        <Outlet />
      </Provider>
    </QueryClientProvider>
  );
}
