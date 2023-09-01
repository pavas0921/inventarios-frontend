import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { InventoryDetails } from "../components/Inventory";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import {
  Ambient,
  AmbientAdd,
  Dashboard,
  InventoryByPropertyId,
  InventoryList,
  InventoryPages,
  ItemAdd,
  Owners,
  PersonDetails,
  PersonList,
  Properties,
  Tenant,
  TenantDetails,
  TenantList,
} from "../pages/";
import PropertiesList from "../pages/PropertiesList";

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
    path: "/propiedades/",
    element: <PropertiesList />,
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
    path: "/item/add",
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
  {
    path: "/inventarios",
    element: <InventoryList />,
    errorElement: <div>Hubo un error!!</div>,
  },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
