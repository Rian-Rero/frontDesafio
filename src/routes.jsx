import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { AppLayout } from './layouts';
import { Home } from './Pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}></Route>
      <Route index element={<Home />} />
    </Route>,
  ),
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
