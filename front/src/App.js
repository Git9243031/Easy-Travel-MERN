import React from "react";
import Theme from "./theme";
import { Layout } from "./components/Layout/Layout.styles";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Theme>
      <Router>
        <Layout>
          <Navbar />
        </Layout>
      </Router>
    </Theme>
  );
};

export default App;
