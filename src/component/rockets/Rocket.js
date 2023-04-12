import './Rocket.css';
import React from 'react';
import PropTypes, { string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeReservedState } from '../redux/rockets/rocketsSlice';

function Rocket(props) {
  const {
    id, flickrImages, name, description, reserved,
  } = props;

  const dispatch = useDispatch();

  Rocket.propTypes = {
    id: PropTypes.string.isRequired,
    flickrImages: PropTypes.arrayOf(string).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  };

  const zero = 0;

  return (
    <li className="rocket">
      <img src={flickrImages[zero]} alt={name} />
      <div className="rocket__right">
        <p className="rocket__right__name">{name}</p>
        <p className="rocket__right__description">
          {reserved && <i className="rocket__reserved-badge">reserved</i>}
          {description}
        </p>
        <button
          onClick={() => {
            dispatch(changeReservedState(id));
          }}
          className={reserved ? 'rocket__right__button--reserved' : 'rocket__right__button'}
          type="submit"
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
}

export default Rocket;
