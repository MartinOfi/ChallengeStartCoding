import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { GET_CHARACTERS } from "../Apollo/Queries/Characters";
import { FavoritesContext } from "../context/CharactersProvider";

export default function Home() {
  const {characters} = useContext(FavoritesContext)
  console.log(characters);
  const obj={
    name:"hola",
    image:"sasa"
  }
  return(
    <div>
      {obj.hasOwnProperty('image') ? <p>Ramon</p>: <p>ricardo</p>}
      DashBoard
    </div>
  )
}
