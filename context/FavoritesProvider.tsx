import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
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
      value={{ favorites}}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
