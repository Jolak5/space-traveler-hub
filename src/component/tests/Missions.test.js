import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../missions/Missions';
import { getMissions, joinMission } from '../redux/missions/missionsSlice';

afterEach(cleanup);

describe('Missions', () => {
  it('Missions to match Snapshot', () => {
    const quotes = render(<Provider store={store}><Missions /></Provider>);
    expect(quotes).toMatchSnapshot();
  });
});

describe('Missions reducers', () => {
  it('should fetch missions', async () => {
    await store.dispatch(getMissions());
    expect(store.getState().missions.missions.length).toEqual(10);
  });
  it('should join a mission', () => {
    store.dispatch(joinMission('9D1B7E0'));
    expect(store.getState().missions.missions[0].joined).toBe(true);
  });
});
