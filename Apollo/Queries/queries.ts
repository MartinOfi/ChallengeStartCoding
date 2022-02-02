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
  query GET_EPISODES($page: Int, $search: String) {
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
export const DETAILS = (type) => {
  if (type == "character") {
    return gql`
      query CHARACTER_DETAIL($id: ID!) {
        character(id: $id) {
          id
          name
          status
          species
          type
          gender
          image
          origin {
            id
            name
            type
            dimension
          }
          location {
            id
            name
            created
            residents {
              name
              image
            }
          }
        }
      }
    `;
  } else if (type == "location") {
    return gql`
      query LOCATION_DETAIL($id: ID!) {
        location(id: $id) {
          id
          name
          type
          dimension
          created
          residents {
            name
            status
            image
          }
        }
      }
    `;
  } else {
    return gql`
      query EPISODE_DETAIL($id: ID!) {
        episode(id: $id) {
          name
          episode
          air_date
          characters {
            name
            image
          }
        }
      }
    `;
  }
};
