import { useEffect, useState } from 'react';
import useMount from '@zydon/common/hooks/useMount';

import router from './routes';

import './historyEvents';

const RouterSync = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const { pathname: originalPathname, search } = window.location;
    const pathname = originalPathname.replace(router.basename || '', '');
    const newPath = search ? pathname + search : pathname;

    router.navigate(newPath || '/', { replace: true });
  }, [pathname]);

  useMount(() => {
    const handler = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('locationchange', handler);
    return () => {
      window.removeEventListener('locationchange', handler);
    };
  });

  return null;
};

export default RouterSync;
