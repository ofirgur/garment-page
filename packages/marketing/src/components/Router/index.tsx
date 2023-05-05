import * as React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<p>Layout</p>} />),
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
