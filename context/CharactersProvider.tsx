import { useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { GET_CHARACTERS } from "../Apollo/Queries/Characters";

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("characters");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const favoritesStorage=window.localStorage.getItem('favorites')
    if(favoritesStorage){
      const favoritesInStorage=JSON.parse(favoritesStorage)
      setFavorites(favoritesInStorage)
    }
    else{
      window.localStorage.setItem('favorites',JSON.stringify(favorites))
    }
  }, []);
  return (
    <FavoritesContext.Provider
      value={{ favorites, setFilter, page, setPage }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
