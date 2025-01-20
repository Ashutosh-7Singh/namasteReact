import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resObj from "../utils/mockData";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData=async ()=>{
     const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json= await data.json()
    console.log(json);
    
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    
  }
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
