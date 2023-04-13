import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';
import './mission.css';

export default function Missions() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.missions.isLoading);

  const mission = useSelector((state) => state.missions.missions);

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
                <p className={item.joined ? 'member' : 'notMember'}>
                  {' '}
                  {item.joined ? 'member' : 'Not a member'}
                </p>
              </td>
              <td>
                <button
                  className={item.joined ? 'leaveMission' : 'joinMission'}
                  type="button"
                  onClick={() => dispatch(joinMission(item.mission_id))}
                >
                  {item.joined ? 'leave Mission' : 'join Mission'}
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
