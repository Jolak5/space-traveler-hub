import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../rockets/Rockets';
import { getRockets, changeReservedState } from '../redux/rockets/rocketsSlice';

afterEach(cleanup);

describe('Rocket', () => {
  it('Rockets to match Snapshot', () => {
    const rockets = render(<Provider store={store}><Rockets /></Provider>);
    expect(rockets).toMatchSnapshot();
  });
});

describe('Rockets reducers', () => {
  it('should fetch rockets', async () => {
    await store.dispatch(getRockets());
    expect(store.getState().rockets.rockets.length).toEqual(4);
  });
  it('should reserve a rocket', () => {
    store.dispatch(changeReservedState('9D1B7E0'));
    expect(store.getState().rockets.rockets[0].reserved).toBe(false);
  });
});
