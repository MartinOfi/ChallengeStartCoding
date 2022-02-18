import { FavoriteStar } from "./favoriteStar";
import Link from "next/link";
interface Props {
  item: any;
  page?: string;
  option: string;
}
const Card = ({ item, page = "", option }: Props) => {
  return (
    <Link
      scroll={false}
      href={{
        pathname: `/Details/${item.id}`,
        query: {
          type: option,
        },
      }}
    >
      <div
        className="shadow-sm m-3 cursor-pointer card-total"
        style={{ cursor: "pointer" }}
      >
        {item.hasOwnProperty("image") && (
          <div className="image-icon">
            <img src={item.image} className="card-img-top" alt="" />
            <FavoriteStar item={item} page={page} />
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>

          <a className="btn btn-primary" role="button">
            Details
          </a>
        </div>
      </div>
    </Link>
  );
};
export default Card;
