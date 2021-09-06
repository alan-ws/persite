import { Link, Outlet } from "react-router-dom";
import { Container, Logo, NavBar, NavLinks } from "../../styles";

function Home() {
  return (
    <Container>
      <NavBar>
        <Logo>LOGO</Logo>
        <NavLinks>
          <Link to="portfolio">portfolio</Link>
          <Link to="contact">contact</Link>
          <Link to="about">about</Link>
          <Link to="blog">b-logs</Link>
          <Link to="vlog">v-logs</Link>
          <Link to="alog">a-logs</Link>
        </NavLinks>
      </NavBar>

      <Outlet />
    </Container>
  );
}

export default Home;
