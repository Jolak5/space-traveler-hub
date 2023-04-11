/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from './redux/missions/missionsSlice';
import './mission.css';

export default function Missions() {
  const [join, setJoin] = useState(true);
  const [membership, noMembership] = useState(true);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.missions.isLoading);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const mission = useSelector((state) => state.missions.missions);

  function changeMemberState() {
    noMembership(!membership);
    setJoin(!join);
  }

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading ....</h1>
      </div>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        {mission.map((item) => (
          <tbody key={item.mission_id}>
            <tr>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td>
                {membership ? 'Not a member' : 'member'}
              </td>
              <td>
                <button type="button" onClick={() => changeMemberState()}>
                  {join ? 'Join Mission' : 'Leave Mission'}
                </button>
              </td>
            </tr>
          </tbody>
        ))}

      </table>
    </div>
  );
}
