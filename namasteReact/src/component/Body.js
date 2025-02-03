import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const[filteredRestaurant,setFilteresRestaurant]= useState([])
  const [searchText, setSearchText] = useState("");
  // Whenever state variable update,react triggers a reconciliation cycle(re-renders the component)
  console.log("body Renderd");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteresRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="serach-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the ui
              // searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter(
                // (res) => res?.info?.name.includes(searchText) 
                (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("filteredRes",filteredRestaurant);
              setFilteresRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            // Filter logic
            const filteredList = listOfRestaurants.filter((restaurant) => {
              const rating = restaurant?.info?.avgRatingString;
              console.log("rating", rating);
              return !isNaN(rating) && Number(rating) > 4.2;
            });
            setListOfRestaurant(filteredList);
            console.log(filteredList); // Logs the filtered list
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link  key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
            <RestaurantCard
           
            resData={{ restaurants: [restaurant] }}
          />
          </Link>
        
        ))}
      </div>
    </div>
  );
};

export default Body;
