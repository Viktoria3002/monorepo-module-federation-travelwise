import { App } from '@/components/App/App';
import { LazyAbout } from '@/pages/about/About.lazy';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const routes = [
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: '/admin/about',
        element: (
          <Suspense fallback={'Loading...'}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
