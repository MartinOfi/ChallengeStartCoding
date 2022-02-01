import { useState } from "react";
import CardsContainer from "../components/Characters/CharactersContainer";
import Favorites from "../components/Favorites";
import Search from "../components/Search";
import SideBarContainer from "../components/SideBar";
export default function Home() {
  const [section, setSection] = useState("favorites");
  const [search, setSearch] = useState("");
  return (
    <div className="principal-container">
      <SideBarContainer setSection={setSection} />
      <div className="dashboard">
      
        <Search search={search} setSearch={setSearch} />
        {section == "favorites" ? (
          <Favorites />
        ) : search.length > 2 ? (
          <>
            <h1 className="my-2 text-capitalize text-center">{section}</h1>
            <CardsContainer option={section} search={search} />
          </>
        ) : (
          <h5 className="text-center my-2">Enter at least 3 letters</h5>
        )}
      </div>
    </div>
  );
}
