import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items}) => {
  // console.log("items", items);

  const dispatch=useDispatch();
const handleAddItem=(item)=>{
dispatch(addItem(item))
}
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2 ">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice}
                </span>
              </div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div>
                <button className="p-2 bg-black text-white shadow-lg absolute mx-16 rounded-lg cursor-pointer"
                onClick={()=>handleAddItem(item)}
                >
                  Add +
                </button>
                <img src={CDN_URL + item.card.info.imageId} />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
