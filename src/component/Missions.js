/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from './redux/missions/missionsSlice';
import './mission.css';

export default function Missions() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.missions.isLoading);
  const join = useSelector((state) => state.missions.join);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const mission = useSelector((state) => state.missions.missions);
  const state = useSelector((state) => state.missions.missions);

  function changeMission(id) {
    const newState = state.map((rocket) => {
      if (rocket.id !== id) return rocket;
      return { ...rocket, reserved: true };
    });
    dispatch(joinMission(newState));
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
          <tbody key={item.mission_id} id={item.mission_id}>
            <tr>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td>
                {join ? 'Not a member' : 'member'}
              </td>
              <td>
                <button type="button" onClick={changeMission()}>
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
