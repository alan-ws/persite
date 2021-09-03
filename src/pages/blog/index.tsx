import { Link, PartialRouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BlogStore } from "../../store";
import { Blog } from "./Blog";
import { Content } from "../../styles";
import { useQuery } from "graphql-hooks";
import { useEffect } from "react";

function Index() {
  const { setBlogs } = BlogStore.useStore((state) => state);
  const { loading, error, data } = useQuery<{
    blogMdnCollection: { items: BlogStore.BlogResponse[] };
  }>(BlogStore.blogQuery);

  useEffect(() => {
    if (!data) return;
    setBlogs(data.blogMdnCollection.items);
  }, [data]);

  if (loading) {
    return <h1>LOADING.....</h1>;
  }

  if (!!error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      {data?.blogMdnCollection.items.map((value: BlogStore.BlogResponse, index: number) => {
        const blogPost = {
          title: value.title,
          blurb: value.body.json.content[0].content[0].value,
        };

        return <BlogPost {...blogPost} key={index} />;
      })}
    </>
  );
}

interface IBlogPost {
  title: string;
  blurb: string;
}

function BlogPost(props: IBlogPost) {
  return (
    <>
      <h1>
        <Link to={`${props.title.split(" ").join("-").toLowerCase()}`}>{props.title}</Link>
        <p>{props.blurb}</p>
      </h1>
    </>
  );
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
  return (
    <Content>
      <Outlet />
    </Content>
  );
}
