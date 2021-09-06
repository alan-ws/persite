import { styled, css } from "goober";
import * as polished from "polished";
import AddIcon from "./images/add.svg";
import AddSymbol from "./images/add-symbol.svg";

export const svgs = {
  icons: {
    add: () => AddIcon,
    addSymbol: () => AddSymbol,
  },
};

interface IStyle {
  colors: {
    bg: string;
    layer: string;
    title: string;
    title2: string;
    text: string;
    danger: string;
    softDanger: string;
    success: string;
    softSuccess: string;
    darkSuccess: string;
  };
  bp: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

export const style: IStyle = {
  colors: {
    bg: `rgba(251, 187, 4, 1)`,
    layer: `rgba(253, 248, 234, 1)`,
    title: `rgba(19, 19, 19, 1)`,
    title2: `rgba(61, 61, 61, 1)`,
    text: `rgba(136, 141, 151, 1)`,
    danger: `rgba(216, 92, 82, 1)`,
    softDanger: `rgba(255, 186, 186, 1)`,
    success: `rgba(223, 242, 191, 1)`,
    darkSuccess: `rgba(150, 212, 43, 1)`,
    softSuccess: `rgba(223, 242, 191, 0.3)`,
  },
  bp: {
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1366,
    xxl: 1500,
  },
};

export const media = (
  minBp?: typeof style.bp[keyof typeof style.bp],
  maxBp?: typeof style.bp[keyof typeof style.bp]
): string =>
  `@media only screen${minBp ? ` and (min-width: ${minBp}px)` : ""}${
    maxBp ? ` and (max-width: ${maxBp - 1}px)` : ""
  }`;

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  ${media(style.bp.xl, style.bp.xxl)} {
    width: ${style.bp.xl}px;
  }
  ${media(style.bp.lg, style.bp.xl)} {
    width: ${style.bp.lg}px;
  }
  ${media(style.bp.md, style.bp.lg)} {
    width: ${style.bp.md}px;
  }
  ${media(style.bp.sm, style.bp.md)} {
    width: ${style.bp.sm}px;
  }
  width: ${style.bp.xxl}px;
  margin: 0 auto;
`;

export const Content = styled("div")`
  flex: 1;
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

export const NavBar = styled("div")`
  display: flex;
  width: 100%;
  & > div {
    padding-top: 24px;
  }
`;

export const NavLinks = styled("div")`
  display: flex;
  flex: 0.8;
  justify-content: flex-end;

  & > a {
    text-decoration: none;
    padding-bottom: 16px;
    margin-right: 64px;
  }

  & > a:last-child {
    margin-right: 0px;
  }

  & > a:hover {
    color: green;
  }
`;

export const Logo = styled("div")`
  display: flex;
  flex: 0.2;
`;
