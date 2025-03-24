import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar";
import PlayerForm from './components/NewPlayersForm';


const App = () => {
  const [searchParam, setSearchParam] = useState("");

  return (
    <div className="app-container">
      <Navbar setSearchParam={setSearchParam} />
      
      <main className="main-content">
        <h2>🐶 New Player Form 🐶</h2>
        <p>Search Term: <strong>{searchParam}</strong></p>

        {/* Placeholder: You could show filtered puppy players or content here */}
        <div className="content-area">
          {/* Example: Filtered list */}
          {/* filteredData.map(item => <Item key={item.id} {...item} />) */}
          <h2>🐶 Active Player Roster 🐶</h2>
        </div>
      </main>
    </div>
  );
};

export default App;