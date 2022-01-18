import { useState } from "react";
import CharactersContainer from "../components/Characters/CharactersContainer";
import Favorites from "../components/Favorites";
import SideBarContainer from "../components/SideBar";
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
