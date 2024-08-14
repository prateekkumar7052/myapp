import React, { useState } from "react";
import axios from "axios";
import '../styles/SearchDoctor.css'

const Search = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/api/search?mobileNumber=${mobileNumber}`
      );
      setResult(response.data);
      setError("");
    } catch (err) {
      setError(err.response ? err.response.data.error : "Error occurred");
      setResult(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="Search-container">
        <label>
          
          <input placeholder="Search Mobile"
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {result && <p>Result: {JSON.stringify(result)}</p>}
    </div>
  );
};

export default Search;
