import './Rockets.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rockets">
      {rockets.isLoading ? <h1>Rockets Loading...</h1> : (
        <ul className="rockets__list">
          {rockets.rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              flickrImages={rocket.flickrImages}
              name={rocket.name}
              type={rocket.type}
              description={rocket.description}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Rockets;
