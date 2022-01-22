import CharacterIcon from "../Icons/CharacterIcon"
import EpisodeIcon from "../Icons/EpisodeIcon"
import FavIcon from "../Icons/FavIcon"
import LocationIcon from "../Icons/LocationIcon"

const SideBarContainer=({setSection})=>{
return(
  <div className="sidebar">
    <ul className="list-group">
      <li onClick={()=>setSection("favorites")}><a href="#" className="text-white h6"><FavIcon/>Favorites</a></li>
      <li onClick={()=>setSection("characters")}><a href="#" className="text-white h6"><CharacterIcon/>Characters</a></li>
      <li onClick={()=>setSection("locations")}><a href="#" className="text-white h6"><LocationIcon/>Locations</a></li>
      <li onClick={()=>setSection("episodes")}><a href="#" className="text-white h6"><EpisodeIcon/>Episodes</a></li></ul>
  </div>
)
}
export default SideBarContainer