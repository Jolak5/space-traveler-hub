/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from '../redux/missions/missionsSlice';
import './mission.css';

export default function Missions() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.missions.isLoading);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const mission = useSelector((state) => state.missions.missions);

  // function changeMemberState(id) {
  // }

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
                {item.joined ? 'member' : 'Not a member'}
              </td>
              <td>
                <button type="button" onClick={() => dispatch(joinMission(item.mission_id))}>
                  {item.joined ? 'leave Mission' : 'join Mission' }
                </button>
              </td>
            </tr>
          </tbody>
        ))}

      </table>
    </div>
  );
}
