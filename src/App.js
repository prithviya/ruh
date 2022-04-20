import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Home.jsx';
import About from './component/About.jsx';
function App() {
  return (
    <div>
      <Router>
        <Home/>
          <Routes>
                <Route path ="/" element ={<About/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
