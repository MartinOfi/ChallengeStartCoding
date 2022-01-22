import { gql } from "@apollo/client";

export const GET_CHARACTERS = (page) => {
  return gql`
    query GET_CHARACTERS{
     characters(page: ${page}){
      info{
        pages
      }
       results {
          id
          species
          name
          image
          }
        }
      }`;
};
export const GET_LOCATIONS = (page) => {
  return gql`
    query GET_LOCATIONS {
      locations (page: ${page}){
        info {
          pages
        }
        results {
          name
          dimension
          created
          type
          residents {
            name
            image
            gender
          }
        }
      }
    }
  `;
};
export const GET_EPISODES = (page) => {
  return gql`
    query GET_EPISODES {
      episodes(page: ${page}) {
        info {
          pages
        }
        results {
          name
          episode
          characters {
            name
          }
        }
      }
    }
  `;
};
