import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rocket from '../rockets/Rocket';

afterEach(cleanup);

describe('Missions', () => {
  it('Missions to match Snapshot', () => {
    const quotes = render(<Provider store={store}><Rocket /></Provider>);
    expect(quotes).toMatchSnapshot();
  });
});
