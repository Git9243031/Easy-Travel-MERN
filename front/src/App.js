import React from "react";
import { Layout } from "./components/Layout/Layout.styles";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import UploadProductPage from "./pages/UploadProductPage/UploadProductPage";
import SinglePage from "./pages/SinglePage/SinglePage";
import EditProduct from "./pages/EditProduct/EditProduct";

const App = () => {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/products/upload" component={UploadProductPage} />
          <Route exact path="/products/:id" component={SinglePage} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
