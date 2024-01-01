import React from "react";
import { IMG_CDN_URL } from "../../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
}) => {
  return (
    <div className=" bg-slate-200 p-3  w-80 h-96 rounded-lg m-2 shadow-50  relative ">
      <img
        className="w-full p-3 rounded-lg object-fit"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="whitespace-normal break-words">{cuisines.join()}</p>
      <br />{" "}
      <ul className=" absolute bottom-4 flex  justify-between    ">
        <li className="">⭐{avgRating}</li>
        <li className=""> {sla.deliveryTime}</li>
      </ul>
    </div>
  );
};

export default RestaurantCard;
