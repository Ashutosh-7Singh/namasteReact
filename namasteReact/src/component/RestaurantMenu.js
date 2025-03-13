import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";
const RestaurntMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, city, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("itemsCard",  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(",")}-{costForTwoMessage}
      </p>

      {/* categoryis accordian */}
      {categories.map((category, index) => (
        <RestaurantCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurntMenu;
