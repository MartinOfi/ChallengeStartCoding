import { useContext, useEffect, useMemo, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesProvider";
import Card from "../Card";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const [page, setPage] = useState<number>(0);
  const max: number = useMemo(() => {
    let acum = 0;
    for (let i = 0; i * 10 < favorites.length; i++) {
      acum = i;
    }
    return acum;
  }, []);

  return (
    <div className="text-center">
      <h1 className="my-2">Favorites</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {favorites
          ? favorites.slice(0 + 10 * page, 10 + 10 * page).map((item, i) => {
              return (
                <Card item={item} option="characters" page="fav" key={i} />
              );
            })
          : null}
      </div>
      {favorites.length > 10 && (
        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: "200px" }}
        >
          <button
            className="btn btn-primary"
            onClick={() => setPage(page - 1)}
            disabled={page == 0}
          >
            Prev
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setPage(page + 1)}
            disabled={page == max}
          >
            Next
          </button>
        </div>
      ) }
    </div>
  );
};
export default Favorites;
