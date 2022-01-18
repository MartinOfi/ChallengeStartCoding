import { useEffect, useState } from "react";
import { FavoriteStar } from "./favoriteStar";

const Card = ({ item,page=""}) => {
  return (
    <div className="card shadow-sm m-3">
      {item.hasOwnProperty("image") && (
        <div className="image-icon">
          <img src={item.image} className="card-img-top" alt="" />
            <FavoriteStar
              item={item}
              page={page}
            />
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <button className="btn btn-light">See More</button>
      </div>
    </div>
  );
};
export default Card;
