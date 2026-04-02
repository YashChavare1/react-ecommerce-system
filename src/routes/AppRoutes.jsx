import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import MainLayout from "../components/layout/MainLayout";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {routesConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;