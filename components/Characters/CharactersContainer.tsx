import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { GET_CHARACTERS } from "../../Apollo/Queries/Characters";
import { FavoritesContext } from "../../context/FavoritesProvider";
import Card from "../Card";
import Favorites from "../Favorites";

const CharactersContainer=()=>{
  const [page,setPage]=useState(1)
  const {data,error,loading}=useQuery(GET_CHARACTERS(page))
  const { handleAddFavorite } = useContext(FavoritesContext);
  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error..</p>
  }
  
  return (
    <div className="text-center">
      <h1 className="my-1">Characters</h1>
      <div className="d-flex justify-content-center flex-wrap">
     {data && data.characters.results.map((item,i)=>{
      return <Card item={item} handleAddFavorite={handleAddFavorite} key={i}/>
     })}
    </div>
    </div>
  );
}
export default CharactersContainer