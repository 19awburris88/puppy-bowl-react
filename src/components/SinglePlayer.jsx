// 🔹 This page displays a single player based on their ID from the URL (React Router) Originally iid this as a Modal 
// It fetches the full player details from the API

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePlayer = () => {
  const { id } = useParams(); 
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchPlayer = async () => {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players/${id}`
        );
        const result = await response.json();
        setPlayer(result.data.player);
      } catch (err) {
        setError(err);
      }
    };

    fetchPlayer();
  }, [id]);

  if (error) return <p>Error loading player: {error.message}</p>;
  if (!player) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} width="250" />
      <p><strong>Breed:</strong> {player.breed}</p>
      <p><strong>Status:</strong> {player.status}</p>
    </div>
  );
};

export default SinglePlayer;
