// This form lets users manually add new players to the roster
// It has 3 inputs: name, breed, image URL. All are required. I leanred this via AI the first time which I kept 

import { useState } from 'react';
import PetsIcon from "@mui/icons-material/Pets";

const PlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if form is filled
    if (!name || !breed || !imageUrl) {
      alert('Please fill in all fields.');
      return;
    }

    // Add player to App state
    addPlayer({ name, breed, imageUrl });

    setName('');
    setBreed('');
    setImageUrl('');
  };

  return (
    <section className="add-player-section">
      <h2>🐶 New Player Form 🐶</h2>
      <div className="form-row">
        <input type="text" placeholder="Enter player name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Enter breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
        <input type="text" placeholder="Enter image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <button onClick={handleSubmit}>Add Player <PetsIcon /></button>
      </div>
    </section>
  );
};

export default PlayerForm;