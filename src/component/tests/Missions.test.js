import React from 'react';
import { render } from '@testing-library/react';
import Missions from '../missions/Missions';

describe('Missions', () => {
  it('Missions to match Snapshot', () => {
    const quotes = render(<Missions />);
    expect(quotes).toMatchSnapshot();
  });
});
