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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
