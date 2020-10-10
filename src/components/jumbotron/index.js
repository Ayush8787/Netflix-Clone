import React from "react";
import {
  Inner,
  Container,
  Title,
  Image,
  Pane,
  SubTitle,
  Item,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children }) {
  return <Container>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children }) {
  return <Title>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps}></Image>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
