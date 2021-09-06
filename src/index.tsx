import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { setup } from "goober";
import "./index.css";

setup(React.createElement);

const client = new GraphQLClient({
  url: "https://graphql.contentful.com/content/v1/spaces/b0d7sayrt6rr/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer NwTLrvrLMw0QepzmB0RRIuyF93r0EEki8gCs6e6icus",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <Router>
        <App />
      </Router>
    </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
