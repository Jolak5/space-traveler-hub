import React from 'react';
import './Myprofile.css';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="myprofile">
      <div className="myprofile__mymissions">
        <h2>My Missions</h2>
        <ul className="myprofile__list">
          <li className="myprofile__list-item">Missiosn 1</li>
          <li className="myprofile__list-item">Missiosn 2</li>
          <li className="myprofile__list-item">Missiosn 3</li>
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
