import React from "react";
import { useRoutes } from "react-router-dom";
import { Blogs, blogRoutes } from "./pages/blog";
import { Vlogs, vlogRoutes } from "./pages/vlog";
import { Alogs, alogRoutes } from "./pages/alog";
import { Portfolio } from "./pages/portfolio";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/notFound";
import Home from "./pages/home";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "blog",
          element: <Blogs />,
          children: blogRoutes,
        },
        {
          path: "vlog",
          element: <Vlogs />,
          children: vlogRoutes,
        },
        {
          path: "alog",
          element: <Alogs />,
          children: alogRoutes,
        },
      ],
    },
    {
      path: "about",
    },
    {
      path: "contact",
      element: <Contact />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
}

export default App;
