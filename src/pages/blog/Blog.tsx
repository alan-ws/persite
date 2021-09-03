import React from "react";
import { useParams } from "react-router-dom";
import { resolveRoute } from "../../lib/utils";
import { BlogStore } from "../../store";

export const blogs: { [key: string]: boolean } = {
  "download-uninterupted": true,
};

function Main() {
  const blogs = BlogStore.useStore((state) => state.blogs);

  return <h1>individual BLOG</h1>;
}

export const Blog = resolveRoute(Main, BlogStore.useStore);
