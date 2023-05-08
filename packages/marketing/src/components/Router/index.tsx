import * as React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from '../Layout';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />} />),
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
