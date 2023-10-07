// import React from "react";

//  function SearchBar() {
//   // While SearchBar value Changes
//   const onSearchChange = (e) => {
//     setSearchInput(e.target.value);
//     console.log(e.target.value);
//   };
//   const filterData = (searchInput, restaurants) => {
//     let data = restaurants.filter((restaurant) => {

//       restaurant.includes(searchInput.toLowerCase());
//     });
//     return data;
//   };
//   return (
//     <div className="searchBar">
//       <input
//         type="text"
//         className="searchField"
//         value={searchInput}
//         onChange={onSearchChange}
//       />
//       <button onClick={filterData(searchInput, restaurants)}>Search</button>
//     </div>
//   );
// }

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
  // on Search Change in searchbar
  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  // filtering Data for searchbar
  const filterData = (searchInput, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  return (
    <>
    </>
  );
};

export default SearchBar;
