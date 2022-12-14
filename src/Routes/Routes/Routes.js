import { createBrowserRouter } from "react-router-dom";
import Breackfast from "../../components/Menu/Breackfast/Breackfast";
import Dinner from "../../components/Menu/Dinner/Dinner";
import Drinks from "../../components/Menu/Drinks/Drinks";
import IndianFood from "../../components/Menu/IndianFood/IndianFood";
import ItalianFood from "../../components/Menu/ItalianFood/ItalianFood";
import Menu from "../../components/Menu/Menu/Menu";
import VeganFood from "../../components/Menu/VeganFood/VeganFood";
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
      },
      {
        path: "/breackfast",
        element: <Breackfast />,
      },
      {
        path: "/dinner",
        element: <Dinner />,
      },
      {
        path: "/drinks",
        element: <Drinks />,
      },
      {
        path: "/indianFood",
        element: <IndianFood />,
      },
      {
        path: "/italianFood",
        element: <ItalianFood />,
      },
      {
        path: "/veganFood",
        element: <VeganFood />,
      }
    ]
  }
]);

export default router;
