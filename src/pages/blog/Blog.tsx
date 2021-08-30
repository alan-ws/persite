import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// get this from store
const blogs: { [key: string]: boolean } = {
  "background-fetch-api": true,
};

export function Blog() {
  let navigate = useNavigate();

  useEffect(() => {
    const contentToGet = window.location.pathname.split("/");

    if (contentToGet.length < 2) navigate("fgsefes");
    if (!blogs[contentToGet[2]]) navigate("/blog");
  }, []);

  return <h1>individual BLOG</h1>;
}
