import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Registration from "./Pages/Registration";
import Navbar from './components/Navbar'
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
