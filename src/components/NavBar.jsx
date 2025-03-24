import PetsIcon from "@mui/icons-material/Pets";

const Navbar = ({ setSearchParam }) => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="nav-container">
        <h1>BarkaMania: Puppy Bowl</h1>
        <div className="search-box">
          <label htmlFor="search-input">
            Search:{" "}
            <input
              id="search-input"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchParam(e.target.value)}
            />
          </label>
          <button className="icon-button" aria-label="Puppy Search Action">
            <PetsIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
