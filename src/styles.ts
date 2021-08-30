import { styled, css } from "goober";
import * as polished from "polished";

export const Container = styled("div")<{ containerSize: number }>`
  display: flex;
  width: ${(props) => props.containerSize}px;
  margin: 0 auto;
`;

export const Content = styled("div")`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  justify-content: space-between;
`;

export const Title = styled("h1")``;

export const Card = styled("div")`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: min-content;
  padding: 16px;
  align-self: center;

  &:hover {
    background-color: green;
    cursor: pointer;
  }
`;

export const SideBar = styled("div")`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  position: fixed;
  height: 100vh;
  justify-content: center;

  & > a {
    display: block;
    text-decoration: none;
    padding: 16px;
  }
`;
