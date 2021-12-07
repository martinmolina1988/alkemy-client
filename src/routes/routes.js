// Layouts
import LayoutBasic from "../layouts/LayoutBasic";

// Pages
import Home from "../pages/Home";
import Create from "../pages/Create/Create";

const routes = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
    exact: true,
  },{
    path: "/create/:id_record",
    layout: LayoutBasic,
    component: Create,
    exact: true,
  },
  {
    path: "/create",
    layout: LayoutBasic,
    component: Create,
    exact: true,
  },
 
  {
    layout: LayoutBasic,
    component: Home,
  },
];

export default routes;
