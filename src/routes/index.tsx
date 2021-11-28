import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { useSetRem } from "../utils/px2Rem";


const App = React.lazy(() => import("../App"))
const Login = React.lazy(() => import("@/views/Login/Login.view")) 
const Home  = React.lazy(() => import("@/views/Home/Home.view")) 
const About = React.lazy(() => import("@/views/About/About.view")) 
const Game = React.lazy(() => import("@/views/Game/Game.view")) 
const Result  = React.lazy(() => import("@/views/Result/Result.view")) 


function BaseRouter() {
  useSetRem();
  const routes = useRoutes(
    [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/home",
            element: <Home></Home>,
          },
          {
            path: "/about",
            element: <About></About>,
          },
           {
            path: "/game",
            element: <Game></Game>,
          },
           {
            path: "/result",
            element: <Result></Result>,
          },
          {
            path: "/login", element: <Login/> 
          }
        ]
      },
      { path: "*", element: <div>请扫描二维码使用</div> },
    ],
    ""
  ); //第二个参数是basename
  return <div>{routes}</div>;
}
export default BaseRouter;