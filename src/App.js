// import logo from './logo.svg';
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";
import Dashboard from "./Pages/Dashboard";
// import Dashboard1 from "./Pages/Dashboard1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
