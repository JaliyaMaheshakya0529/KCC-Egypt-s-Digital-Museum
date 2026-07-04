import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Back-btn';
import Home from './pages/Home';
import Timeline from './pages/Timeline';

// Gallery Folder Files
import Origin from './pages/Gallery/Origin';
import Pyramids from './pages/Gallery/Pyramids';
import Pharaohs from './pages/Gallery/Pharaohs';
import Legacy from './pages/Gallery/Legacy';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            
            {/* Gallery Core System */}
            <Route path="/gallery/origin" element={<Origin />} />
            <Route path="/gallery/pyramids" element={<Pyramids />} />
            <Route path="/gallery/pharaohs" element={<Pharaohs />} />
            <Route path="/gallery/legacy" element={<Legacy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;