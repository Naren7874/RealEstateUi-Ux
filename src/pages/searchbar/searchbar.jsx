import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

const TYPES = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const switchType = useCallback((val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  }, []);

  const isSearchDisabled = !query.city || !query.minPrice || !query.maxPrice;

  return (
    <div className="searchBar">
      <div className="type">
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={query.city}
          onChange={handleChange}
          aria-label="City"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          value={query.minPrice}
          onChange={handleChange}
          aria-label="Minimum Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          value={query.maxPrice}
          onChange={handleChange}
          aria-label="Maximum Price"
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className={isSearchDisabled ? "disabled" : ""}
          onClick={(e) => isSearchDisabled && e.preventDefault()}
        >
          <button disabled={isSearchDisabled} aria-label="Search">
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
