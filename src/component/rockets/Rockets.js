import './Rockets.css';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rockets">
      {rockets.isLoading ? <h1>Rockets Loading...</h1> : (
        <ul className="rockets__list">
          {rockets.rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              flickrImage={rocket.flickrImage}
              name={rocket.name}
              type={rocket.type}
              description={rocket.description}
              reserved={rocket.reserved}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Rockets;
