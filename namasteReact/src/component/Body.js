import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resObj from "../utils/mockData";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resObj.restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            // Filter logic
            const filteredList = listOfRestaurants.filter((restaurant) => {
              const rating = restaurant.info?.avgRatingString;
              return !isNaN(rating) && Number(rating) > 4;
            });

            setListOfRestaurant(filteredList);
            console.log(filteredList); // Logs the filtered list
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={{ restaurants: [restaurant] }}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
