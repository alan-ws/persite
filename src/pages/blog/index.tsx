import { Link, PartialRouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BlogStore } from "../../store";
import { Blog } from "./Blog";
import { Content } from "../../styles";
import { useQuery } from "graphql-hooks";
import { useEffect } from "react";
import { styled } from "goober";

const BlogContent = styled(Content)`
  flex: 0.7;
  flex-wrap: nowrap;
  margin: 0 auto;
  flex-direction: column;
`;

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
    <BlogContent>
      <h1>The Blogs</h1>
      {data?.blogMdnCollection.items.map((value: BlogStore.BlogResponse, index: number) => {
        const blogPost: IBlogPost = {
          title: value.title,
          blurb: value.body.json.content[0].content[0].value,
          header: index === 0,
        };

        return <BlogPost {...blogPost} key={index} />;
      })}
      {data?.blogMdnCollection.items.map((value: BlogStore.BlogResponse, index: number) => {
        const blogPost: IBlogPost = {
          title: value.title,
          blurb: value.body.json.content[0].content[0].value,
          header: index === 1,
          publishedDate: "Sept 4th 2021",
        };

        return <BlogPost {...blogPost} key={index} />;
      })}
    </BlogContent>
  );
}

interface IBlogPost {
  title: string;
  blurb: string;
  header: boolean;
  publishedDate?: string;
}

const HeaderBlog = styled("div")`
  display: flex;
`;
const Image = styled("img")`
  width: 100%;
  border-radius: 8px;
`;
const Snapshot = styled("div")`
  display: flex;
  flex-direction: column;

  & > * {
    padding-left: 32px;
  }
`;
const Cards = styled("div")`
  display: flex;
  width: 100%;

  & > div {
    padding-right: 24px;
  }

  & > div:last-child {
    padding-right: 0px;
  }
`;
const CardBlog = styled("div")`
  width: 33%;
  margin-top: 54px;
`;
const ImageWrapper = styled("div")``;

function BlogPost(props: IBlogPost) {
  if (props.header) {
    return (
      <HeaderBlog>
        <Image
          src={
            "https://download.cnet.com/a/img/resize/cdb32d38a2de6a9dc6bb51d7f3c216350befd41f/hub/2020/02/22/5814e528-9a28-491b-953b-bf9ec7fccf79/logo400x400.png?auto=webp&fit=crop&height=675&width=1200"
          }
        />
        <Snapshot>
          <h1>{props.title}</h1>
          <p>{props.blurb}</p>
        </Snapshot>
      </HeaderBlog>
    );
  }

  return (
    <Cards>
      <CardBlog>
        <Link to={`${props.title.split(" ").join("-").toLowerCase()}`}>
          <ImageWrapper>
            <Image
              src={
                "https://download.cnet.com/a/img/resize/cdb32d38a2de6a9dc6bb51d7f3c216350befd41f/hub/2020/02/22/5814e528-9a28-491b-953b-bf9ec7fccf79/logo400x400.png?auto=webp&fit=crop&height=675&width=1200"
              }
            />
          </ImageWrapper>
          <span>{props.publishedDate}</span>
          <h1>{props.title}</h1>
          <p>{props.blurb}</p>
        </Link>
      </CardBlog>
    </Cards>
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

const Main = styled(Content)`
  margin: 0;
`;

export function Blogs() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}
