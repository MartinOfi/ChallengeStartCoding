import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [section, setSection] = useState<string>("favorites");
  const [favorites, setFavorites] = useState<any[]>([]);
  useEffect(() => {
    const favoritesStorage: string = window.localStorage.getItem("favorites");
    if (favoritesStorage) {
      const favoritesInStorage = JSON.parse(favoritesStorage);
      setFavorites(favoritesInStorage);
    } else {
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, []);
  const handleAddFavorite = (item: any): void => {
    const favoritesStorage = JSON.parse(
      window.localStorage.getItem("favorites")
    );
    const isFinded = favoritesStorage.find((ele) => ele.id == item.id);
    if (!isFinded) {
      setFavorites([...favorites, item]);
      window.localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, item])
      );
    } else {
      favoritesStorage.splice(favoritesStorage.indexOf(isFinded), 1);
      setFavorites(favoritesStorage);
      window.localStorage.setItem(
        "favorites",
        JSON.stringify(favoritesStorage)
      );
    }
  };
  return (
    <FavoritesContext.Provider value={{ favorites, handleAddFavorite,section, setSection }}>
      {children}
    </FavoritesContext.Provider>
  );
};
