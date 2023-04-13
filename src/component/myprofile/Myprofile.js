import React from 'react';
import './Myprofile.css';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const missions = useSelector((state) => state.missions.missions);

  const joinedMission = missions.filter((mission) => mission.joined);

  return (
    <div className="myprofile">
      <div className="myprofile__mymissions">
        <h2>My Missions</h2>
        <ul className="myprofile__list">
          {joinedMission.length ? joinedMission.map((item) => (<li key={item.item_id} className="myprofile__list-item">{item.mission_name}</li>)) : <li className="myprofile__list-item">No Rockets Reserved yet</li>}
        </ul>
      </div>
      <div className="myprofile__myrockets">
        <h2>My Rockets</h2>
        <ul className="myprofile__list">
          {reservedRockets.length ? reservedRockets.map((rocket) => (<li key={rocket.id} className="myprofile__list-item">{rocket.name}</li>)) : <li className="myprofile__list-item">No Rockets Reserved yet</li>}
        </ul>
      </div>
    </div>
  );
};
export default Myprofile;
