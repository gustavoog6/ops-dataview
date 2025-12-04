import { waitFor } from '@testing-library/react';
import { renderScreen } from 'test/_utils/render-screen';

import Home from '@configs/views/Home';

import '@testing-library/jest-dom';

describe('Home', () => {
  it('deve renderizar a Home corretamente', async () => {
    const { getByText } = renderScreen(<Home />);

    await waitFor(() => {
      expect(getByText('Nome do usuário')).toBeInTheDocument();

      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('jane.doe@example.com')).toBeInTheDocument();
    });
  });
});
