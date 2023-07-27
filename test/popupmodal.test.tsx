import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PopupModal } from '../src';

const App = () => {
  return <div>{/* <PopupModal /> */}</div>;
};

describe('it', () => {
  it('renders without crashing', async () => {
    const { getByText } = render(<App />);
    const linkElement = await waitFor(() => getByText('Pop Modal'));

    expect(linkElement).toBeInTheDocument();
  });
});
