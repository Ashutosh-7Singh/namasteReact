import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams();
  

  useEffect(() => {
    fetchMenu();
  }, []);

  // console.log("hello");

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    setResInfo(json.data);

  };

if (resInfo === null) return <Shimmer />;

const { name, cuisines,costForTwoMessage,city,avgRating } = resInfo?.cards?.[2]?.card?.card?.info || {};

const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];


console.log("itemsCard",itemCards);

// if(itemCards.length === 0){
//   return <h2>Loading menu items ...........</h2>
// }
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(",")}-{costForTwoMessage}</h3>
      <h3>{avgRating}-{city}</h3>
      <ul>

        {itemCards.map(item =><li key={item?.card?.info?.id}>{item?.card?.info?.name}-{"Rs"} {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
        <li>Burger</li>
        <li>Diet Coke</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurntMenu;
