import { Routes, Route } from "react-router-dom";

import Login from "./Screens/Login";
import Home from "./Screens/Home";
import VesselBoard from "./Screens/VesselBoard"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/vessel-board" element={<VesselBoard />} />
      // Not Found
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes;