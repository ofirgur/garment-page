import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { routes } from './components/Router';
import App from './components/App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const router =
    defaultHistory ||
    createMemoryRouter(routes, {
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    router.subscribe(({ location }) => onNavigate(location));
  }

  const root = createRoot(el);
  root.render(<App router={router} />);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = router.state.location;

      if (pathname !== nextPathname) {
        router.navigate(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserRouter(routes) });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
