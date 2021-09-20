import { gql } from "@apollo/client";

export const GET_CHARACTERS = (page) => {
  return gql`
    query{
     characters(page: ${page}){
       results {
          id
          species
          name
          image
          }
        }
      }`;
};
