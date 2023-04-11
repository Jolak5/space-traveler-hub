import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Missions from './component/Missions';
import Navbar from './component/Navbar';
import Rockets from './component/rockets/Rockets';
import Myprofile from './component/myprofile/Myprofile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Rockets />} />
      <Route path="missions" index element={<Missions />} />
      <Route path="myprofile" index element={<Myprofile />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
