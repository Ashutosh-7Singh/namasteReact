import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser}=useContext(UserContext)

  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.restaurants[0].info;
  const { slaString, lastMileTravelString } = resData?.restaurants[0].info.sla;


  // const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, sla } = resData?.info;
  // const { slaString, lastMileTravelString } = sla;
  

  return (
    <div className="m-4 p-4 w-80 bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="res-logo "
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      {/* <h4>{resData?.restaurants[0].info?.cloudinaryImageId}</h4> */}
      <h4>{cuisines.join(",")}</h4>
      <h4>
        ★ {avgRatingString} 
        </h4>
        <h4>
        {slaString}
        {lastMileTravelString} {costForTwo}
      </h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};


export const withPromotedLabel =(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
