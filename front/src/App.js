import React from "react";
import Theme from "./theme";
import { Layout } from "./components/Layout/Layout.styles";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Theme>
      <Router>
        <Layout>
          <Navbar />
          <Route exact path="/" component={MainPage} />
        </Layout>
      </Router>
    </Theme>
  );
};

export default App;
