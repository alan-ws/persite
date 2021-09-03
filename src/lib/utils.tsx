import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseStore } from "zustand";
import { blogs } from "../pages/blog/Blog";
import { BlogStore } from "../store";

export function resolveRoute(Component: any, fn: UseStore<BlogStore.IStore>) {
  return () => {
    let navigate = useNavigate();
    const blogs = fn((state) => state.blogs);

    useEffect(() => {
      const contentToGet = window.location.pathname.split("/");

      const exists: boolean = blogs.some((elem: BlogStore.Blog) => elem.title === contentToGet[2]);

      if (!exists) navigate(`/${contentToGet[1]}`);
    }, []);

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
