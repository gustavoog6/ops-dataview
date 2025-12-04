import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import loadable from '@zydon/common/utils/loadable';

import Main from '@configs/layouts/Main';
import { BASE_PATH } from 'constants/constants';

const Home = loadable(lazy(() => import('@configs/views/Home')));
const About = loadable(lazy(() => import('@configs/views/About')));
const Form = loadable(lazy(() => import('@configs/views/Form')));

const router = createBrowserRouter(
  [
    {
      element: <Main />,
      path: '/',
      children: [
        {
          path: '/',
          element: <Home />,
          index: true,
        },
        {
          path: '/sobre',
          element: <About />,
        },
        {
          path: '/formulario',
          element: <Form />,
        },
        {
          path: '*',
          element: <>Página não encontrada</>,
        },
      ],
    },
  ],
  { basename: BASE_PATH },
);

export default router;
