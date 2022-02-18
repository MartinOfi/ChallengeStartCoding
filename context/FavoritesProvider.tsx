import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [section, setSection] = useState<string>("favorites");
  const [favorites, setFavorites] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const newSearch=(input)=>{
    setSearch(input)
    page != 1 && setPage(1)
  }
  const changePage = (selectionSelect, page) => {
    setPage(page);
    if (selectionSelect !== section) {
      setSection(selectionSelect);
    } else {
      setPage(page);
    }
  };
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
    <FavoritesContext.Provider
      value={{ favorites, handleAddFavorite, section, setSection,page,changePage,search, newSearch }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
