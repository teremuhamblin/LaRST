import React from "react";
import Layout from "./components/Layout.jsx";
import AppRouter from "./router/Router.jsx";

const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default App;
