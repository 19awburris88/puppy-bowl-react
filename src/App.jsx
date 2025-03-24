import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import PlayerForm from "./components/NewPlayersForm";
import AllPuppies from "./components/AllPlayers"; // ✅ Make sure the path is correct

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
        <p>
          Search Term: <strong>{searchParam}</strong>
        </p>

        <PlayerForm addPlayer={addPlayer} />

        <div className="content-area">
          <h2>🐶 Active Player Roster 🐶</h2>
          {filteredPlayers.length > 0 ? (
            <ul>
              {filteredPlayers.map((player, index) => (
                <li key={index} className="player-item">
                  <h3>{player.name}</h3>
                  <p>Breed: {player.breed}</p>
                  <img src={player.imageUrl} alt={player.name} width="150" />
                </li>
              ))}
            </ul>
          ) : (
            <p>No players to show.</p>
          )}

          {/* ✅ This displays the full API list below your filtered list */}
          <AllPuppies />
        </div>
      </main>
    </div>
  );
};

export default App;
