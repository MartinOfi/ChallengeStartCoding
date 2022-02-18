import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { DETAILS } from "../../Apollo/Queries/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faHeart,
  faSkullCrossbones,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { TextField } from "../../components/Details/TextField";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { FavoriteStar } from "../../components/Card/favoriteStar";
const DetailPage = () => {
  const [data, setData] = useState<any>({});
  const router = useRouter();
  const queriesVars = {
    variables: {
      id: router.query.id,
    },
  };
  const {
    data: queryData,
    error,
    loading,
  } = useQuery(DETAILS(router.query.type), queriesVars);
  useEffect(() => {
    if (queryData && !error && !loading) {
      router.query.type == "characters"
        ? setData(queryData.character)
        : router.query.type == "locations"
        ? setData(queryData.location)
        : setData(queryData.episode);
    }
    return null;
  }, [queryData, error, loading]);
  const characters = (): [] => {
    if (router.query.type == "characters") return data.location.residents;
    if (router.query.type == "locations") return data.residents;
    if (router.query.type == "episodes") return data.characters;
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1400 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1200 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 750 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };
  console.log(data);

  return (
    <div
      className="px-5 text-light d-flex flex-column justify-content-around"
      id="detail-page"
      style={{
        backgroundImage: "url(../images/background.jpg)",
      }}
    >
      {loading && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          ></div>
          <h1 className="ms-2">Loading. </h1>
        </div>
      )}
      {!loading && data?.name && (
        <>
          <div className="d-flex justify-content-between">
            <h1 className="mt-4 text-light">{data.name} Details</h1>
            <Link href={"/"}>
              <div className="mt-4 is-clickable">
                <FontAwesomeIcon icon={faUndoAlt} size="2x" />
                <p>Return</p>
              </div>
            </Link>
          </div>
          <div className="d-flex align-items-center" id="character-data">
            {router.query.type == "characters" && (
           
                <div className="image-icon">
                  <img
                    className="rounded"
                    src={data.image}
                    alt="Character Image"
                    width={300}
                    height={300}
                  />
                  <FavoriteStar item={data} page={router.query.type} />
                </div>
              
            )}
            <section className="ms-3">
              {router.query.type == "characters" && (
                <>
                  <h2 className="text-light">Data:</h2>
                  <p className="h5">
                    <strong>Status: </strong>
                    <FontAwesomeIcon
                      color={data.status == "Alive" ? "#00FFFF" : "black"}
                      icon={
                        data.status == "Alive"
                          ? faHeart
                          : data.status == "Dead"
                          ? faSkullCrossbones
                          : data.status
                      }
                    />
                  </p>
                  <TextField title="Species" text={data.species} font="fs-4" />
                  <TextField title="Gender" text={data.gender} font="fs-4" />
                  <TextField
                    title="Species"
                    text={`${data.species} in dimension ${data.origin.dimension}`}
                    font="fs-4"
                  />
                  <TextField
                    title="Location"
                    text={data.location.name}
                    font="fs-4"
                  />
                </>
              )}
              {!(router.query.type == "episodes") ? (
                <TextField title="Type" text={data.type} font="fs-4" />
              ) : (
                <>
                  <TextField title="Episode" text={data.episode} font="fs-4" />
                  <TextField
                    title="Created on"
                    text={data.created}
                    font="fs-4"
                  />
                  <TextField
                    title="Air Date"
                    text={data.air_date}
                    font="fs-4"
                  />
                </>
              )}
              {router.query.type == "locations" && (
                <>
                  <TextField
                    title="Dimension"
                    text={data.dimension}
                    font="fs-4"
                  />
                  <TextField
                    title="Created on"
                    text={data.created}
                    font="fs-4"
                  />
                </>
              )}
            </section>
          </div>
          <div className="is-clickable">
            <TextField
              title={`${
                router.query.type == "episodes"
                  ? "Characters in the episode"
                  : "Some Location Residents"
              }`}
              font="fs-4"
            />
            <Carousel
              responsive={responsive}
              showDots={false}
              ssr={true}
              itemClass="carousel-item-padding-40-px"
              className="listStyleNone"
            >
              {characters().map((item: any, index) => {
                return (
                  <div
                    className="mx-auto text-center bg-blue rounded"
                    style={{ width: "200px", userSelect: "none" }}
                  >
                    <img
                      src={item.image}
                      alt="resident image"
                      width={200}
                      style={{ objectFit: "cover" }}
                    />
                    <p className="fs-4 ">{item.name}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
};
export default DetailPage;
