import React, { useEffect, useState } from "react";
import "../../App.css";
// import { restaurantList } from "../../data.json";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import "../componentStyles/searchBar.css";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST } from "../../config";


// body component
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // using useeffect to maintain
  useEffect(function () {
    getRestaurants();
  }, []);

  // creating function to get data from api

  async function getRestaurants() {
    try {
      const data = await fetch(RESTAURANT_LIST);
      const results = await data.json();
      setAllRestaurants(
        results?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        results?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }

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
  if (allRestaurants?.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="rounded-lg w-2/3 p-2 ml-[15%] align-middle">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          {" "}
          Search{" "}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className="block w-full my-10 p-6 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={searchInput}
            onChange={onSearchChange}
          />
          <button
            className="text-white absolute  right-6 bottom-4 bg-[#0C8079] hover:bg-#0C8090 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red dark:hover:bg-#0C8090 dark:focus:ring-#0C8090"
            onClick={() => {
              setFilteredRestaurants(filterData(searchInput, allRestaurants));
            }}
          >
            Search
          </button>
     
        </div>
      </div>

      <div className=" mx-auto flex flex-wrap p-4 pl-[10%] ">
        {filteredRestaurants?.length == 0 ? (
          <NotFound message="Restaurant" />
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link to={`/restaurants/${restaurant?.info?.id}`}>
                <RestaurantCard 
                  {...restaurant?.info}
                  key={restaurant?.info?.id}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
