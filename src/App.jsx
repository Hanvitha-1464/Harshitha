import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage';
import MemoryLane from './Components/Memory';
import Letters from './Components/letters';
// import PlayList from './Components/Playlist';
import Wishes from './Components/Wishes';
// Add more components as needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/memory" element={<MemoryLane />} />
      <Route path="/letters" element={<Letters />} />
      {/* <Route path="/playlist" element={<PlayList />} /> */}
      <Route path="/wishes" element={<Wishes />} />
      {/* Add more routes here */}
    </Routes>
  );
}

export default App;
