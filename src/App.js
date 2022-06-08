import "./App.scss";
import { useAuthContext } from "./hooks/useAuthContext";

//pages
import Dashboard from "./screen/pages/Dashboard/Dashboard";
import Login from "./screen/pages/Login/Login";
import Register from "./screen/pages/Register/Register";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";

const App = () => {
  const { user, authIsReady } = useAuthContext();
  return (
    <div>
      <Navigation />(
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      )
    </div>
  );
};

export default App;
