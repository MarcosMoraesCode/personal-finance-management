import React from "react";
import styled from "styled-components";
import Layout from "./hoc/Layout/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import BudgetTracking from "./pages/BudgetTracking/BudgetTracking";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/userfinances" exact element={<BudgetTracking />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
