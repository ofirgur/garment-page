import * as React from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';

import Outlet from '../Outlet';

export default createRoutesFromElements(
  <>
    <Route path="/" element={<Outlet />} />
    <Route path="*" element={null} />
  </>,
);
