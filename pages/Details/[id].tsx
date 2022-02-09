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
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 950, min: 750 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 750, min: 450 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
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
        <div className="d-flex justify-content-center ">
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
          <div className="d-flex justify-content-between">
            <h1 className="my-4">{data.character.name} Details</h1>
            <Link href={"/"}>
              <div>
                <FontAwesomeIcon icon={faUndoAlt} size="3x" />
                <p>Return</p>
              </div>
            </Link>
          </div>
          <div className="d-flex">
            <img
              src={data.character.image}
              alt="Character Image"
              width={300}
              height={300}
            />
            <section className="ms-3">
              <h2>Data:</h2>
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
              <TextField title="Species" text={data.character.species} />
              <TextField title="Type" text={data.character.type} />
              <TextField title="Gender" text={data.character.gender} />
              <TextField title="Species" text={data.character.species} />
              <TextField
                title="Species"
                text={`${data.character.species} in dimension ${data.character.origin.dimension}`}
              />
              <TextField title="Location" text={data.character.location.name} />
            </section>
          </div>
          <div>
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
                    className="mx-auto text-center"
                    style={{ width: "170px", userSelect: "none" }}
                  >
                    <img src={item.image} alt="resident image" width={170} />
                    <p className="fs-5 bg-blue">{item.name}</p>
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
