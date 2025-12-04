import { render, waitFor } from '@testing-library/react';

import Plugin from '@app/Plugin';
import { mockPluginProps } from 'mocks/data';

import '@testing-library/jest-dom';

describe('Plugin', () => {
  it('deve renderizar o Plugin corretamente', async () => {
    const { getByText } = render(<Plugin {...mockPluginProps.app} />);

    await waitFor(() => {
      expect(getByText('Aqui é o seu plugin global')).toBeInTheDocument();
    });
  });
});
