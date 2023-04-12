import React from "react";

import Layout from "./hoc/Layout/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import BudgetTracking from "./pages/BudgetTracking/BudgetTracking";
import UserExpenses from "./pages/UserExpenses/UserExpenses";
import UserGoals from "./pages/UserGoals/UserGoals";
import UserIncomes from "./pages/UserIncomes/UserIncomes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/userprofile" exact element={<Profile />} />
          <Route path="/userincomes" exact element={<UserIncomes />} />
          <Route path="/userfinances" exact element={<BudgetTracking />} />
          <Route path="/userexpenses" exact element={<UserExpenses />} />
          <Route path="/usergoals" exact element={<UserGoals />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
