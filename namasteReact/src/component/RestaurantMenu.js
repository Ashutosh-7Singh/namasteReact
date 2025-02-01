import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurntMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  // console.log("hello");

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);

  };

if (resInfo === null) return <Shimmer />;

// console.log("itemsCard",
//   resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card?.itemCards|| []);

  const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ;

console.log("itemsCard",itemCards);


const { name, cuisines,costForTwoMessage,city,avgRating } = resInfo?.cards?.[2]?.card?.card?.info || {};

if(itemCards.length === 0){
  return <h2>Loading menu items ...........</h2>
}
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
