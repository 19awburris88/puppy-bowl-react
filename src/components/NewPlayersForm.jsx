import { useState } from 'react';

const PlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !breed || !imageUrl) {
      alert('Please fill in all fields.');
      return;
    }
    addPlayer({ name, breed, imageUrl });
    setName('');
    setBreed('');
    setImageUrl('');
  };

  return (
    <section className="add-player-section">
      <h2>Add a New Player</h2>
      <input type="text" placeholder="Enter player name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Enter breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
      <input type="text" placeholder="Enter image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button onClick={handleSubmit}>Add Player</button>
    </section>
  );
};

export default PlayerForm;
