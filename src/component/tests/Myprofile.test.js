import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Myprofile from '../myprofile/Myprofile';

afterEach(cleanup);

describe('Profile', () => {
  it('Profile to match Snapshot', () => {
    const quotes = render(<Provider store={store}><Myprofile /></Provider>);
    expect(quotes).toMatchSnapshot();
  });
});
