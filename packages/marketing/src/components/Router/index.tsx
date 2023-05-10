import * as React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Outlet from '../Outlet';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Outlet />} />),
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
