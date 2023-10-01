import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import PlayerDetail from "./PlayerDetail";
import CreatePlayer from "./CreatePlayer";
import PlayerList from "./PlayerList";
import CreateStatsy from "./CreateStatsy";
import StatsyList from "./StatsyList";
import StatsyDetail from "./StatsyDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player/:id" element={<PlayerDetail />} />
        <Route path="/player/add" element={<CreatePlayer />} />
        <Route path="/player" element={<PlayerList />} />
        <Route path="/statsy/add" element={<CreateStatsy />} />
        <Route path="/statsy" element={<StatsyList />} />
        <Route path="/statsy/:id" element={<StatsyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;