// It also filters by the searchParam passed from App
// Players are links to the SinglePlayer view

import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const AllPuppies = ({ searchParam }) => {
  const [puppies, setPuppies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players"
        );
        const result = await response.json();
        setPuppies(result.data.players);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  const removePlayer = (id) => {
    setPuppies((prev) => prev.filter((puppy) => puppy.id !== id));
  };

  // Filter the players using the search input
  const filteredPuppies = puppies.filter((puppy) =>
    puppy.name.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <div id="all-puppies-container">
      {error && <p>Error: {error.message}</p>}

      {/* Display player cards */}
      {filteredPuppies.map((puppy) => (
        <article key={puppy.id} className="puppy-card">
          <Link
            to={`/player/${puppy.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>{puppy.name}</div>
            <img src={puppy.imageUrl} alt={puppy.name} />
            <h3>{puppy.name}</h3>
            <p>Breed: {puppy.breed}</p>
          </Link>
          <button onClick={() => removePlayer(puppy.id)}>Remove</button>
        </article>
      ))}
    </div>
  );
};

export default AllPuppies;
