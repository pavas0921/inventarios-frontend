import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { PropertyForm } from "../components/Property";
import {
  Dashboard,
  Owners,
  PersonList,
  PersonDetails,
  TenantList,
  Tenant,
  TenantDetails,
  Ambient,
  AmbientAdd,
  InventoryPages,
  InventoryByPropertyId,
  ItemAdd,
  Properties,
} from "../pages/";
import { InventoryDetails } from "../components/Inventory";

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
    path: "/propiedades/add",
    element: <Properties />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/inquilinos/",
    element: <TenantList />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/inquilinos/add",
    element: <Tenant />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/inquilinos/:id",
    element: <TenantDetails />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/propietarios/:id",
    element: <PersonDetails />,
    errorElement: <div>Hubo un error!!</div>,
  },

  {
    path: "/propiedades/add",
    element: <PropertyForm />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/ambientes/",
    element: <Ambient />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/ambientes/add",
    element: <AmbientAdd />,
    errorElement: <div>Hubo un error!!</div>,
  },

  {
    path: "/items/",
    element: <ItemAdd />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/inventarios/add",
    element: <InventoryPages />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/inventarios/:propertyId",
    element: <InventoryByPropertyId />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/inventario/:index",
    element: <InventoryDetails />,
    errorElement: <div>Hubo un error!!</div>,
  },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
