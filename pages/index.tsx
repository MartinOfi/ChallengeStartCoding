import { useContext, useState } from "react";
import CardsContainer from "../components/Characters/CharactersContainer";
import Favorites from "../components/Favorites";
import Search from "../components/Search";
import SideBarContainer from "../components/SideBar";
import { FavoritesContext } from "../context/FavoritesProvider";
export default function Home() {
  const { section, setSection, search, setSearch } =
    useContext(FavoritesContext);
  return (
    <div className="principal-container">
      <SideBarContainer setSection={setSection} />
      <div className="dashboard">
        {!(section == "favorites") && (
          <Search search={search} setSearch={setSearch} />
        )}
        {section == "favorites" ? (
          <Favorites />
        ) : (
          <>
            <h1 className="my-2 text-capitalize text-center">{section}</h1>
            <CardsContainer option={section} search={search} />
          </>
        )}
      </div>
    </div>
  );
}
