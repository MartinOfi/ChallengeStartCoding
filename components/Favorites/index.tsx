import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesProvider";
import Card from "../Card";

const Favorites = () => {
  const { favorites  } = useContext(FavoritesContext);
  console.log(favorites);
  
  return (
    <div className="text-center">
      <h1 className="my-5">Favorites</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {favorites
          ? favorites.map((item, i) => {
              return <Card item={item} page="fav" key={i} />;
            })
          : null}
      </div>
    </div>
  );
};
export default Favorites;
