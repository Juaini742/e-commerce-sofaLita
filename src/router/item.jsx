import CartPage from "../component/Pages/Cart";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Pages/Login/Login";
import ProfilePage from "../component/Pages/Profile";
import Register from "../component/Pages/Register/Regitser";

export const routeItem = [
  {
    id: 1,
    path: "/register",
    route: <Register />,
  },
  {
    id: 2,
    path: "/login",
    route: <Login />,
  },
  {
    id: 3,
    path: "/",
    route: <Home />,
  },
  {
    id: 4,
    path: "/profile",
    route: <ProfilePage />,
  },
  {
    id: 5,
    path: "/cart",
    route: <CartPage />,
  },
];
