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
const DetailPage = () => {
  const router = useRouter();
  const queriesVars = {
    variables: {
      id: router.query.id,
    },
  };
  const { data, error, loading } = useQuery(
    DETAILS(router.query.type),
    queriesVars
  );

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

  return (
    <div
      className="px-5 text-light d-flex flex-column justify-content-around"
      id="detail-page"
      style={{
        backgroundImage: "url(../images/background.jpg)",
        backgroundSize: "100%",
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
      {!loading && data && (
        <>
          <div className="d-flex justify-content-between" >
            <h1 className="mt-4 text-light">{data.character.name} Details</h1>
            <Link href={"/"}>
              <div className="mt-4 is-clickable">
                <FontAwesomeIcon icon={faUndoAlt} size="2x"  />
                <p>Return</p>
              </div>
            </Link>
          </div>
          <div className="d-flex align-items-center" id="character-data">
            <img
              src={data.character.image}
              alt="Character Image"
              width={300}
              height={300}
            />
            <section className="ms-3">
              <h2 className="text-light">Data:</h2>
              <p className="h5">
                <strong>Status: </strong>
                <FontAwesomeIcon
                  color={data.character.status == "Alive" ? "#00FFFF" : "black"}
                  icon={
                    data.character.status == "Alive"
                      ? faHeart
                      : data.character.status == "Dead"
                      ? faSkullCrossbones
                      : data.character.status
                  }
                />{" "}
              </p>
              <TextField title="Species" text={data.character.species} font="fs-4"/>
              <TextField title="Type" text={data.character.type} font="fs-4"/>
              <TextField title="Gender" text={data.character.gender} font="fs-4"/>
              <TextField title="Species" text={data.character.species} font="fs-4"/>
              <TextField
                title="Species"
                text={`${data.character.species} in dimension ${data.character.origin.dimension}`}
              font="fs-4"/>
              <TextField title="Location" text={data.character.location.name} font="fs-4"/>
            </section>
          </div>
          <div className="is-clickable">
            <TextField title="Some Location Residents" font="fs-4"/>
            <Carousel
              responsive={responsive}
              showDots={false}
              ssr={true}
              itemClass="carousel-item-padding-40-px"
              className="listStyleNone"
            >
              {data.character.location.residents.map((item, index) => {
                return (
                  <div
                    className="mx-auto text-center bg-blue"
                    style={{ width: "200px", userSelect: "none" }}
                  >
                    <img src={item.image} alt="resident image" width={200} style={{objectFit:"cover"}}/>
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
