import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import router from './router';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
