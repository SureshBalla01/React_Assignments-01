import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import pkg from 'semantic-ui-react/package.json'
import SingleCard from "./SingleCard";
import UserCards from "./UserCards";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h2">Select Courses</Header>
    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <SingleCard/> 
  </App>,
  document.getElementById("root")
);
