import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { WithProviders } from './helpers/WithProviders';

test('renders learn react link', async () => {
  render(<App />, { wrapper: WithProviders });
  await waitFor(() => {
    const linkElement = screen.getByText('ivysaur');
    expect(linkElement).toBeInTheDocument();
  })

});
