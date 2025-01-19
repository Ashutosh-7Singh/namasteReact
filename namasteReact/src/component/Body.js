import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resObj from "../utils/mockData"
const Body = () => {
  // State Variable -Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([
  resObj
  ]);

  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("bubtton clicked");
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.restaurants[0]?.info?.avgRatingString > 4
            );

            setListOfRestaurant(filteredList);
            console.log(filteredList);
            
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={{ restaurants: [resObj.restaurants[0]] }} /> */}
      
        {resObj.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resData={{ restaurants: [restaurant] }}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Body;
