import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Gallery from "../../components/Gallery/Gallery";
import Menu from "../../components/Menu/Menu/Menu";
import NavMenu from "../../components/Menu/NavMenu/NavMenu";
import Shop from "../../components/Shop/Shop";
import Main from "../../Layout/Main/Main";
import BookATable from "../../Pages/BookATable/BookATable";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/bookATable",
        element: <BookATable/>,
      }
    ]
  }
]);

export default router;
