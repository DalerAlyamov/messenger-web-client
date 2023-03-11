import React, { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import Login from "pages/login";
import Test from "pages/test";
import ChatLayout from "pages/chat-layout";
import Chat from "pages/chat";

const Routes: React.FC = (): JSX.Element => {
  const location = useLocation();

  React.useEffect(() => {
    const draggableElements: NodeListOf<HTMLElement> = document.querySelectorAll("[draggable=true]");
    for (const element of draggableElements) (element as HTMLElement).draggable = false;
  }, [location.pathname]);

  const routes = useRoutes([
    {
      path: "/",
      element: <ChatLayout />,
      children: [
        {
          index: true,
          element: <Chat />,
        },
      ],
    },
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
