import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import { DataProvider } from "./components/Context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
class App extends Component {
  state = {};
  render() {
    return (
      <DataProvider>
        <ApolloProvider client={client}>
          <div className="app">
            <Router>
              <Header />
              <Section />
            </Router>
          </div>
        </ApolloProvider>
      </DataProvider>
    );
  }
}

export default App;
