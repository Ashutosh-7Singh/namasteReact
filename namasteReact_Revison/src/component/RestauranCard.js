import { CDN_URL } from "../utils/constants";
const RestauranCard = (props) => {
    const { resData } = props;
    const {
        name,
        cuisines,
        costForTwo,
        avgRatingString,
        cloudinaryImageId,
    } = resData.info;


    // console.log(name, cuisines)
    return (
        <div className="res-card">
            {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660 */}
            <img
                className="res-logo"
                src={
                    CDN_URL +
                    cloudinaryImageId
                }
                alt=""
            ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRatingString}⭐️</h4>
        </div>
    );
};

export default RestauranCard;
