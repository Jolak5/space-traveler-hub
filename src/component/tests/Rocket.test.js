import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rocket from '../rockets/Rocket';

afterEach(cleanup);

describe('Rocket', () => {
  it('Rockets to match Snapshot', () => {
    const rocket = render(<Provider store={store}><Rocket /></Provider>);
    expect(rocket).toMatchSnapshot();
  });
});
