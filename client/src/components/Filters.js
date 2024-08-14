// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Filters = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(`/doctors?specialization=${searchTerm}`);
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search by specialization"
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default Filters;
