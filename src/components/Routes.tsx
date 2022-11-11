import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import { Pages } from "./Pages";

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Navigate to="/calendar" />} />
      <Route path="/*" element={<Pages />} />
    </RouterRoutes>
  );
}

export { Routes };
