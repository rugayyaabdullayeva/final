import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Latest from "../pages/Latest";
import Blog from "../pages/Blog";
import Pages from "../pages/Pages";
import Contact from "../pages/Contact";
import Details from "../pages/Details";
import Add from "../pages/Add";
import Wishlist from "../pages/Wishlist";
import Root from "../pages/Root";

export const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
    },
    {
      path: "latest",
      element: <Latest />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "/:id",
        element: <Details />,
      },
    ],
  },
];