import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesProvider";
import FavIcon from "../Icons/FavIcon";
import FavSelectIcon from "../Icons/FavSelectIcon";

interface Props {
  item: any;
  page: string;
}

export const FavoriteStar = ({ item, page }: Props) => {
  const { handleAddFavorite } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  useEffect(() => {
    const favoritesStorage: boolean =
      JSON.parse(window.localStorage.getItem("favorites")).find(
        (el) => el.id == item.id
      ) !== undefined;
    setIsFavorite(favoritesStorage);
  }, []);
  const handeAddAndSetFavorite = (item: any): void => {
    handleAddFavorite(item);
    setIsFavorite(!isFavorite);
  };
  return (
    <div
      className="is-clickable"
      onClick={() => {
        handeAddAndSetFavorite(item);
      }}
    >
      {isFavorite || page == "fav" ? <FavSelectIcon /> : <FavIcon />}
    </div>
  );
};
