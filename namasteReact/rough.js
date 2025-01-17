import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const restaurant = resData?.restaurants[0];
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
          restaurant?.info?.cloudinaryImageId
        }
        alt="res-image"
      />
      <h3>{restaurant.info.name}</h3>
      {/* <h4>{resData?.restaurants[0].info?.cloudinaryImageId}</h4> */}
      <h4>{restaurant.info?.cuisines?.join(",")}</h4>
      <h4>
        ★ {restaurant.info?.avgRatingString}
        {restaurant.info?.sla?.slaString}
        {restaurant.info?.sla?.lastMileTravelString}{" "}
        {restaurant.info?.costForTwo}
      </h4>
    </div>
  );
};
const resObj = {
  "@type":
    "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
  restaurants: [
    {
      info: {
        id: "1003646",
        name: "Manomay ",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/0a6d7298-1c41-4197-a386-d1fbab2ea20e_1003646.jpg",
        locality: "Gnandhinagar",
        areaName: "Malleshwaram",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Snacks", "South Indian"],
        veg: true,
        parentId: "132222",
        avgRatingString: "NEW",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-01-16 21:01:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-2ab44c33-39fd-4db7-ae92-fea4404797e9",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/manomay-gnandhinagar-malleshwaram-rest1003646",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    
  ],
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={{ restaurants: [resObj.restaurants[0]] }} /> */}
        {
          resObj?.map(restaurant =><RestaurantCard resData={{restaurants: [resObj.restaurants[0]]}}/>)
        }
      </div>
      <div></div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* body */}
      <Body />
      {/* footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

