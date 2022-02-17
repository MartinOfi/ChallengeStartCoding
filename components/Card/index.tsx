import { FavoriteStar } from "./favoriteStar";
import Link from "next/link";
const Card = ({ item, page = "" }) => {
  return (
    <div
      className="shadow-sm m-3 is-clickable card-total"
    
    >
      {item.hasOwnProperty("image") && (
        <div className="image-icon">
          <img src={item.image} className="card-img-top" alt="" />
          <FavoriteStar item={item} page={page} />
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <Link
          scroll={false}
          href={{
            pathname: `/Details/${item.id}`,
            query: {
              type:"character"
            },
          }}
        >
          <a className="btn btn-primary" role="button">
            Details
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Card;
