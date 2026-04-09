import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Volunteers from "../pages/Volunteers.jsx";
import Beneficiaries from "../pages/Beneficiaries.jsx";
import Missions from "../pages/Missions.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/volunteers" element={<Volunteers />} />
      <Route path="/beneficiaries" element={<Beneficiaries />} />
      <Route path="/missions" element={<Missions />} />
    </Routes>
  );
};

export default AppRouter;
