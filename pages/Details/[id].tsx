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
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div className="mx-5">
      <div className="d-flex justify-content-between">
        <h1>{data.character.name} Details</h1>
        <Link href={"/"}>
          <div>
            <FontAwesomeIcon icon={faUndoAlt} size="3x" />
            <p>Return</p>
          </div>
        </Link>
      </div>
      <div className="d-flex">
        <img src={data.character.image} alt="Character Image" />
        <section className="ms-3">
          <h2>Data:</h2>
          <p>
            <strong>Status: </strong>
            <FontAwesomeIcon
              color={data.character.status == "Alive" ? "#00FF00" : "black"}
              icon={
                data.character.status == "Alive"
                  ? faHeart
                  : data.character.status == "Dead"
                  ? faSkullCrossbones
                  : data.character.status
              }
            />{" "}
          </p>
          <p>
            <strong>Species:</strong> {data.character.species}
          </p>
          <p>
            <strong>Type:</strong> {data.character.type}{" "}
          </p>
          <p>
            <strong>Gender:</strong>
            {data.character.gender}
          </p>
          <p>
            <strong>Origin:</strong> {data.character.origin.name} in dimension{" "}
            {data.character.origin.dimension}
          </p>
          <p>
            <strong>Location:</strong> {data.character.location.name}
          </p>
        </section>
      </div>
      <p>
        <strong>Some Location Residents</strong>
      </p>
      <div className="d-flex">
        {data.character.location.residents.slice(0, 5).map((item, index) => {
          return (
            <div className="mx-3">
              <img src={item.image} alt="resident image" width={150} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DetailPage;
