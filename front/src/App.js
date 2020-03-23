import React from "react";
import { Layout } from "./components/Layout/Layout.styles";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import UploadProductPage from "./pages/UploadProductPage/UploadProductPage";
import SinglePage from "./pages/SinglePage/SinglePage";

const App = () => {
  return (
      <Router>
        <Layout>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/products/:id" component={SinglePage} />
            {/* <Route exact path="/product/upload" component={UploadProductPage} /> */}
          </Switch>
        </Layout>
      </Router>
  );
};

export default App;
