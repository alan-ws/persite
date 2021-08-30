// what are my thoughts about this project
import React from "react";
import { useQuery } from "graphql-hooks";
import { PartialRouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../../store";
import { Blog } from "./Blog";
import { NotFound } from "../notFound";
import { Content } from "../../styles";

export const blogQuery = `{
  blogMdnCollection {
    items {
      title
      body {
        json
      }
    }
  }
}`;

function Index() {
  return <h1>blog landing page</h1>;
}

export const blogRoutes: PartialRouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/*",
    element: <Blog />,
  },
];

export function Blogs() {
  const { loading, error, data } = useQuery(blogQuery);

  if (loading) return <div>Loading</div>;
  if (error) return <div>BAD</div>;

  return (
    <Content>
      <Outlet />
    </Content>
  );
}
