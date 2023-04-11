import './Rocket.css';
import React from 'react';
import PropTypes, { string } from 'prop-types';

function Rocket(props) {
  const { flickrImages, name, description } = props;

  Rocket.propTypes = {
    flickrImages: PropTypes.arrayOf(string).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <li className="rocket">
      <img src={flickrImages[0]} alt={name} />
      <div className="rocket__right">
        <p className="rocket__right__name">{name}</p>
        <p className="rocket__right__description">{description}</p>
        <button className="rocket__right__button" type="submit">Reserve Rocket</button>
      </div>
    </li>
  );
}

export default Rocket;
