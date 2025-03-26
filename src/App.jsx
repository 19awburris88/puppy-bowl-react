import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import PlayerForm from "./components/NewPlayersForm";
import AllPuppies from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer"; // Route view

const App = () => {
  const [searchParam, setSearchParam] = useState("");
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <div className="app-container">
      <Navbar setSearchParam={setSearchParam} />

      <main className="main-content">
        <Routes>
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <>
                <PlayerForm addPlayer={addPlayer} />

                <div className="content-area">
                  <h2>🐶 Active Player Roster 🐶</h2>

                  {filteredPlayers.length > 0 && (
                    <ul>
                      {filteredPlayers.map((player, index) => (
                        <li key={index} className="player-item">
                          <h3>{player.name}</h3>
                          <p>Breed: {player.breed}</p>
                          <img
                            src={player.imageUrl}
                            alt={player.name}
                            width="150"
                          />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Pass searchParam to AllPuppies for filtering */}
                  <AllPuppies searchParam={searchParam} />
                </div>
              </>
            }
          />

          {/* Single Player Route */}
          <Route path="/player/:id" element={<SinglePlayer />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
