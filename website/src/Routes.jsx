import { Routes, Route } from "react-router-dom";

import Login from "./Screens/Login";
import Home from "./Screens/Home";
import VesselBoard from "./Screens/VesselBoard"
import OKTB from "./Screens/OKTB.jsx"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      // Fast Actions
      <Route path="/vessel-board" element={<VesselBoard />} />
      <Route path="/oktb-generate" element={<OKTB />} />
      // Not Found
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes;