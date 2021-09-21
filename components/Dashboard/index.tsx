import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CHARACTERS } from "../../Apollo/Queries/Characters";
import Favorites from "../Favorites";

const Dashboard=()=>{
  
  return (
    <div>
     <Favorites/>
    </div>
  );
}
export default Dashboard