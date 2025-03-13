import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({data,showItem,setShowIndex}) => {
  //   console.log(data);
  // const [showItem,setShowItem]=useState(false)


  const handleClick=()=>{
    setShowIndex();
    // setShowItem(!showItem)
    // console.log("Clicked");
  }

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4">
        <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data?.title}({data?.itemCards?.length})
          </span>
          <span>▼</span>
        </div>
        {showItem && data?.itemCards && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategories;
