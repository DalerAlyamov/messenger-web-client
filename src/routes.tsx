import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import Test from "pages/test";

const Routes: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Test />,
    },
  ]);
  return <Suspense fallback="Загрузка">{routes}</Suspense>;
};

export default Routes;
