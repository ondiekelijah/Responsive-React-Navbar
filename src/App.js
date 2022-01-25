import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import Events from './components/pages/Events';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/events' element={<Events />} />
          <Route path='/mission' element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
