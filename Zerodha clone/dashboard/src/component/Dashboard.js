import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Fund from "./Fund";
import Holding from "./Holding";

import Order from "./Order";
import Position from "./Position";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
     
        <WatchList />
     
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/order" element={<Order />} />
          <Route path="/holding" element={<Holding />} />
          <Route path="/position" element={<Position />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;