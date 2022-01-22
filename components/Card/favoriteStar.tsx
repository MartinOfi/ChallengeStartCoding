import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesProvider";
import FavIcon from "../Icons/FavIcon";
import FavSelectIcon from "../Icons/FavSelectIcon";

export const FavoriteStar = ({ item, page }) => {
  const { handleAddFavorite } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const favoritesStorage =
      JSON.parse(window.localStorage.getItem("favorites")).find(
        (el) => el.id == item.id
      ) !== undefined;
    setIsFavorite(favoritesStorage);
  }, []);
  const handeAddAndSetFavorite = (item) => {
    handleAddFavorite(item);
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <div
        className="star"
        onClick={() => {
          handeAddAndSetFavorite(item);
        }}
      >
        {isFavorite || page == "fav" ? (
         <FavSelectIcon/>
        ) : (
          <FavIcon/>
          
        )}
      </div>
    </>
  );
};
