import { RouterProvider } from 'react-router-dom';
import { Authed } from '@zydon/auth';
import Common from '@zydon/common/components/Common';

import RouterSync from './RouterSync';
import router from './routes';

import './style.css';

const Configs = () => {
  return (
    <Authed
      mode={import.meta.env.VITE_MODE}
      username={import.meta.env.VITE_USERNAME}
      password={import.meta.env.VITE_PASSWORD}
      fallback={<>Acesso negado</>}
    >
      <Common primaryColor="#4E5BEC" cssVarPrefix="configs">
        <RouterProvider router={router} />
        <RouterSync />
      </Common>
    </Authed>
  );
};

export default Configs;
