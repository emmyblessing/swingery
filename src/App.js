import './App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom';
import Home from './pages/Home/Home';
import OnBoard from './pages/OnBoard/OnBoard';
import Welcome from './pages/Welcome/Welcome';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/onboard" element={<OnBoard />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
