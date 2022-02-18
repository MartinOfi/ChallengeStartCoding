import { useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import {
  GET_CHARACTERS,
  GET_EPISODES,
  GET_LOCATIONS,
} from "../../Apollo/Queries/queries";
import Card from "../Card";
import { Pagination, Space, Spin } from "antd";
import "antd/dist/antd.css";
import { FavoritesContext } from "../../context/FavoritesProvider";
interface Props {
  option: string;
  search: string;
}
interface queriesVars {
  variables: {
    search: string;
    page: number;
  };
}
const CardsContainer = ({ option, search }: Props) => {
  const { page, changePage } = useContext(FavoritesContext);
  
  const queriesVars: queriesVars = {
    variables: {
      search: search.length > 2 ? search : "",
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
    return <h6 className="ms-5 ps-2">Not found, try with other name</h6>;
  }
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
        onChange={(e) => changePage(option,e)}
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
