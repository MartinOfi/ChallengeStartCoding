const Card = ({ item , handleAddFavorite}) => {
  return (
    <div className="card shadow-sm m-3">
      {item.hasOwnProperty("image") && (
        <img src={item.image} className="card-img-top" alt="" />
      )}
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <button className="btn btn-primary" onClick={()=>handleAddFavorite(item)}>
         Add Favorites
        </button>
      </div>
    </div>
  );
};
export default Card;
