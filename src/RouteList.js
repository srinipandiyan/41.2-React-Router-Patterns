import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';

function RouteList({ dogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={ dogs } />} />
      <Route path="/*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RouteList;