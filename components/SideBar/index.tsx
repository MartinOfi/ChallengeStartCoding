const SideBarContainer=({setSection})=>{
return(
  <div className="sidebar">
    <ul className="list-group">
      <li onClick={()=>setSection("favorites")}><a href="#" className="text-white">Favorites</a></li>
      <li onClick={()=>setSection("characters")}><a href="#" className="text-white">Characters</a></li>
      <li onClick={()=>setSection("episodes")}><a href="#" className="text-white">Episodes</a></li>
      <li onClick={()=>setSection("locations")}><a href="#" className="text-white">Locations</a></li></ul>
  </div>
)
}
export default SideBarContainer