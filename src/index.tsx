import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";


import reportWebVitals from './utils/reportWebVitals';

// 性能检测软件
import "./utils/wdyrender";

import "@/index.css"
import "@/assets/css/reset.scss"
import "./App.less"

import { AuthProviders } from "./hooks/useAuth"
import App from "@/routes"

import { Loading } from "@/components/Loading/Loading.component" 
import { ErrorCatch } from "@/components/ErrorCatch/ErrorCatch.component"
import { FallbackRender } from "@/components/ErrorCatch/FallbackRender.component";

ReactDOM.render(
  <BrowserRouter>
    <React.Suspense
      fallback={
        <Loading/>
      }
    >
      <AuthProviders>
        <ErrorCatch  fallbackRender={FallbackRender}>
          <App />
        </ErrorCatch>
      </AuthProviders>
      
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
