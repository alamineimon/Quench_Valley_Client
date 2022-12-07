import { createBrowserRouter } from "react-router-dom";
import Menu from "../../components/Menu/Menu/Menu";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      }
    ]
  }
]);

export default router;
