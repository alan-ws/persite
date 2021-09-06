import { useQuery } from "graphql-hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseStore } from "zustand";
import { BlogStore } from "../store";

export function fetchBlogs() {
  return () => {
    const { loading, error, data } = useQuery<{
      blogMdnCollection: { items: BlogStore.BlogResponse[] };
    }>(BlogStore.blogQuery);

    return { loading, error, data };
  };
}

export function resolveRoute(Component: any, fn: UseStore<BlogStore.IStore>) {
  return () => {
    let navigate = useNavigate();
    const { loading, error, data } = fetchBlogs()();
    const { blogs, setBlogs } = fn((state) => state);

    useEffect(() => {
      if (blogs.length < 1) {
        if (loading) console.log("loading blogs");
        if (error) console.log("failed to load");

        if (!data) return;
        setBlogs(data.blogMdnCollection.items);
        return;
      }

      const contentToGet = window.location.pathname.split("/");

      const exists: boolean = blogs.some(
        (elem: BlogStore.Blog) => elem.title.split(" ").join("-").toLowerCase() === contentToGet[2]
      );

      if (!exists) navigate(`/${contentToGet[1]}`);
    }, [blogs, data]);

    return <Component />;
  };
}

export function debounce(fn: (...args: any[]) => void, time: number) {
  let timeoutId: NodeJS.Timeout | null;
  return wrapper;

  function wrapper(...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, time);
  }
}
