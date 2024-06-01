import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import PublicRoutes from "./routes/publicRoutes";
import { publicRoutes } from "./routes/routes";

import "./App.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      // disable: "mobile",
      duration: 800,
    });

    AOS.refresh();
  }, []);

  return (
    <React.StrictMode>
      <div className="app">
        <Suspense fallback={'...Loading'}>
          <Routes>
            <Route element={<PublicRoutes />}>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Route>
            <Route path="*" element={'Not Found'} />
          </Routes>
        </Suspense>
      </div>
    </React.StrictMode>
  );
}

export default App;
