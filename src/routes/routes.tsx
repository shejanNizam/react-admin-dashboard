import { createBrowserRouter } from "react-router-dom";
import { dashboardItems } from "../constants/router.constant";
import Main from "../layouts/Main/Main";
import { routesGenerators } from "../utils/routesGenerators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: routesGenerators(dashboardItems),
  },
]);

export default router;
