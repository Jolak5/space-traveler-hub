// MyComponent.test.js

import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Myprofile from '../myprofile/Myprofile';

const axios = require('axios');

describe('Myprofile', () => {
  const mockAxios = new MockAdapter(axios);

  beforeEach(() => {
    mockAxios.reset();
  });

  it('renders the component', async () => {
    const response = {
      data: [
        {
          id: 1,
          name: 'John Doe',
        },
        {
          id: 2,
          name: 'Jane Doe',
        },
      ],
    };

    mockAxios.onGet('/users').reply(200, response);

    render(<Myprofile />);

    const users = await screen.findAllByRole('listitem');

    expect(users).toHaveLength(2);
  });
});
