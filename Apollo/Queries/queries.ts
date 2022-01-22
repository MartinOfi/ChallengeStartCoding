import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GET_CHARACTERS($page: Int, $search: String) {
    characters(page: $page, filter: { name: $search }) {
      info {
        pages
      }
      results {
        id
        species
        name
        image
      }
    }
  }
`;
export const GET_LOCATIONS = gql`
  query GET_LOCATIONS($page: Int, $search: String) {
    locations(page: $page, filter: { name: $search }) {
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
export const GET_EPISODES = gql`
  query GET_EPISODES($page:Int,$search:String) {
    episodes(page: $page, filter: { name: $search }) {
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
