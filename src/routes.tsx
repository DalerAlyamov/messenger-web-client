import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import Login from "pages/login";
import Test from "pages/test";

const Routes: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);
  return <Suspense fallback="Загрузка">{routes}</Suspense>;
};

export default Routes;
