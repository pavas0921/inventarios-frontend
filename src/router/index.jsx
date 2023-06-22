import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Dashboard, Owners, PersonList, PersonDetails } from "../pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/propietarios/",
    element: <PersonList />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/propietarios/add",
    element: <Owners />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/propietarios/:id",
    element: <PersonDetails />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/inquilinos",
    element: <Owners />,
    errorElement: <div>Hubo un error!!</div>,
  },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
