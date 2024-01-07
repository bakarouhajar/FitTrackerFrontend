import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Workoutpage from "pages/Workout";
import Schedulepage from "pages/Schedule";
import Clockpage from "pages/Clock";
const DesktopFour = React.lazy(() => import("pages/Profile"));
const DesktopThree = React.lazy(() => import("pages/Diet"));
const Home1 = React.lazy(() => import("pages/Home1"));
const DesktopTwo = React.lazy(() => import("pages/Login"));
const DesktopOne = React.lazy(() => import("pages/Signup"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/workout" element={<Workoutpage />} />
          <Route path="/schedule" element={<Schedulepage />} />
          <Route path="/clock" element={<Clockpage />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
