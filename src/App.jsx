import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import PlayerForm from "./components/NewPlayersForm";
import AllPuppies from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

const App = () => {
  const [searchParam, setSearchParam] = useState(""); // search term from user
  const [players, setPlayers] = useState([]); // manually added players

  // Add new player to the list
  const addPlayer = (player) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  // Filter manually added players by search term
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <div className="app-container">
      <Navbar setSearchParam={setSearchParam} />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PlayerForm addPlayer={addPlayer} />
                <div className="content-area">
                  <h2>🐶 Active Player Roster 🐶</h2>

                  {/* if there are players in the filtered list, show them */}
                  {filteredPlayers.length > 0 && (
                    <ul>
                      {filteredPlayers.map((player, index) => (
                        <li key={index} className="player-item">
                          <h3>{player.name}</h3>
                          <p>Breed: {player.breed}</p>
                          <img src={player.imageUrl} alt={player.name} width="150" />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* always show AllPuppies from the API */}
                  <AllPuppies searchParam={searchParam} />
                </div>
              </>
            }
          />

          {/* individual player detail route */}
          <Route path="/player/:id" element={<SinglePlayer />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;