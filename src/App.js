 
import './App.css';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
           <Route path="/DashBoard" element={<DashBoard/>}></Route>
          {/* <Route path="/AppliedJobs" element={<AppliedJobs/>}></Route>  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
