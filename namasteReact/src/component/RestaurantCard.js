import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.restaurants[0].info;
  const { slaString, lastMileTravelString } = resData?.restaurants[0].info.sla;


  // const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, sla } = resData?.info;
  // const { slaString, lastMileTravelString } = sla;
  

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
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
    </div>
  );
};
export default RestaurantCard;
