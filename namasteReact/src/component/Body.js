import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStaus();
  if(onlineStatus === false )
    return (
  <h1>Looks like you're offline!! please check your internet connection</h1>)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4  ">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100"
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
      
      </div>
      <div className="res-container flex flex-wrap">
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
