// https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=84562

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import { IMG_CDN_URL } from "../../config";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";
const RestaurantDetails = () => {
  const [restaurantdata, setRestaurantdata] = useState(null);

  const { id } = useParams();

  async function RestaurantMenuDetail() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        id
    );
    const result = await data.json(); 
    const menuItems = result?.data?.cards;
    setRestaurantdata(menuItems);
    console.log(menuItems[0].card.card.info);
  }
  // for rerendering element
  useEffect(() => {
    RestaurantMenuDetail();
  }, []);
  // dispatch action

  const dispatch = useDispatch();

  const handleItem = (menuItem) => {
    dispatch(addItems(menuItem));
  };

  return restaurantdata == null ? (
    <Shimmer />
  ) : (
    <>
      <h2 className="font-b">{restaurantdata[0].card.card.info.name}</h2>
      <img
        src={IMG_CDN_URL + restaurantdata[0].card.card.info.cloudinaryImageId}
      ></img>
      {restaurantdata[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
        (menuItem) => {
          console.log(menuItem);
          {
            menuItem.card.info.imageId;
          }
          return (
            <>
              <li className="" key={menuItem.card.info.id}>
                <div className="flex">
                  <div>
                    <h3>{menuItem.card.info.name}</h3>
                    <button
                      className="bold rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={()=>handleItem(menuItem)}
                    >
                      {" "}
                      + Add{" "}
                    </button>
                  </div>
                  <img
                    className="h-32"
                    src={IMG_CDN_URL + menuItem.card.info.imageId}
                  />{" "}
                </div>
              </li>
            </>
          );
        }
      )}
    </>
  );
};
export default RestaurantDetails;
