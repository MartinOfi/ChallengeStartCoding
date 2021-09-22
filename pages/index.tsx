import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { GET_CHARACTERS } from "../Apollo/Queries/Characters";
import CharactersContainer from "../components/Characters/CharactersContainer";
import Dashboard from "../components/Dashboard";
import Favorites from "../components/Favorites";
import SideBarContainer from "../components/SideBar";
import { FavoritesContext } from "../context/FavoritesProvider";
export default function Home() {
  const [section, setSection] = useState("favorites");
  return (
    <div className="principal-container">
      <SideBarContainer setSection={setSection} />
      <div className="dashboard">
        {section == "favorites" && <Favorites />}
        {section == "characters" && <CharactersContainer/>}
        {section == "episodes" && <p>Episodes</p>}
        {section == "locations" && <p>Locations</p>}
      </div>
    </div>
  );
}
