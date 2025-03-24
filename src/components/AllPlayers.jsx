import { useState, useEffect } from "react";

const AllPuppies = () => {
  const [puppies, setPuppies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players"
        );
        const result = await response.json();
        console.log(result.data.players);
        setPuppies(result.data.players);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>All Puppies</h2>
      {error && <p>Error: {error.message}</p>}
      {puppies.map((puppy) => (
        <article key={puppy.id}>
          <div>{puppy.name}</div>
          <div>
            <img src={puppy.imageUrl} alt={puppy.name} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default AllPuppies;
