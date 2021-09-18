import { useQuery } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { GET_CHARACTERS } from "./Queries/Characters";

export default function Home() {
  const [page, setPage] = useState(2);
  const { data } = useQuery(GET_CHARACTERS(page));
  const [favorito, setFavorito] = useState([]);
  console.log("favorito", favorito);
  if (!data) {
    return "loading";
  }
  return (
    <div className="container" style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          -1
        </button>
        {data.characters.results.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.image}></img>
              <button onClick={() => setFavorito([...favorito, item])}>
                Agregar Favorito
              </button>
            </div>
          );
        })}
      </div>
      {favorito.map((item, index) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}
