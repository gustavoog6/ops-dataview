import { render } from '@testing-library/react';

import MUIInit from './mui-init';

jest.mock('constants/constants', () => ({
  APP_NAME: 'test',
  BASE_PATH: '/apps/test',
  MODE: 'test',
}));

jest.mock('@zydon/auth', () => ({
  getToken: jest.fn(() => 'mock-token'),
  setToken: jest.fn(),
  refreshToken: jest.fn(),
  logout: jest.fn(),
  Authed: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useAuth: jest.fn(() => ({
    loggingIn: false,
    loginError: null,
    isAuthenticated: true,
    authData: {
      sub: 'test',
      jti: 'test',
      iat: 1,
      exp: 1,
      enable: true,
      organization_id: 'test',
      solution_id: 'test',
      aud: 'b2b',
      name: 'Nome do usuário',
      email: 'email@usuario.com',
      organization_name: 'test',
      expired_password: false,
      namespace: 'test',
    },
    token: 'mock-token',
    authentication: jest.fn(),
    logout: jest.fn(),
  })),
}));

export const renderComponent = (children: React.ReactNode) => {
  return render(<MUIInit>{children}</MUIInit>);
};
