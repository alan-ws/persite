import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, SideBar } from "../../styles";

export function Home() {
  const [containerSize, setContainerSize] = useState<number>(0);

  useEffect(() => {
    const base = window.innerWidth;
    setContainerSize((base * 95) / 100);
  }, []);

  return (
    <Container containerSize={containerSize}>
      <SideBar>
        <Link to="portfolio">portfolio</Link>
        <Link to="contact">contact</Link>
        <Link to="about">about</Link>
        <Link to="blog">b-logs</Link>
        <Link to="vlog">v-logs</Link>
        <Link to="alog">a-logs</Link>
      </SideBar>
      <Outlet />
    </Container>
  );
}
