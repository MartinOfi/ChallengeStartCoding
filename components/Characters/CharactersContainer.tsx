import { ApolloError, useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import {
  GET_CHARACTERS,
  GET_EPISODES,
  GET_LOCATIONS,
} from "../../Apollo/Queries/queries";
import { FavoritesContext } from "../../context/FavoritesProvider";
import Card from "../Card";
import Favorites from "../Favorites";
import { Pagination, Space, Spin } from "antd";
import "antd/dist/antd.css";
const CardsContainer = ({ option, search }) => {
  const [page, setPage] = useState(1);
  const queriesVars = {
    variables: {
      search: search,
      page: page,
    },
  };
  const { data, error, loading } = useQuery(
    option == "characters"
      ? GET_CHARACTERS
      : option == "locations"
      ? GET_LOCATIONS
      : GET_EPISODES,
    queriesVars
  );
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Space size="large">
          <Spin size="large" />
        </Space>
      </div>
    );
  }
  if (error) {
    return <h6>Not found, try with other name</h6>;
  }
  console.log(data);

  return (
    <div className="text-center pb-3">
      <div className="d-flex justify-content-center flex-wrap">
        {data &&
          option == "characters" &&
          data.characters.results.map((item, i) => {
            return <Card item={item} option={option} key={i} />;
          })}
        {data &&
          option == "locations" &&
          data.locations.results.map((item, i) => {
            return <Card item={item} option={option} key={i} />;
          })}
        {data &&
          option == "episodes" &&
          data.episodes.results.map((item, i) => {
            return <Card item={item} option={option} key={i} />;
          })}
      </div>
      <Pagination
        current={page}
        onChange={(e) => setPage(e)}
        total={
          option == "characters"
            ? data.characters.info.pages * 10
            : option == "locations"
            ? data.locations.info.pages * 10
            : data.episodes.info.pages * 10
        }
      />
    </div>
  );
};
export default CardsContainer;
