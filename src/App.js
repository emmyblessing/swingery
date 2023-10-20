import './App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom';
import Home from './pages/Home/Home';
import OnBoard from './pages/OnBoard/OnBoard';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Verify from './pages/Verify';
import Interest from './pages/Interest';
import Gender from './pages/Gender';
import Looking from './pages/Looking';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/onboard" element={<OnBoard />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/looking" element={<Looking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
