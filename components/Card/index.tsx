const Card = ({ item }) => {
  return (
    <div className="card shadow-sm m-3">
      {item.hasOwnProperty("image") && (
        <img src={item.image} className="card-img-top" alt="" />
      )}
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <a href="#" className="btn btn-primary">
         See Details
        </a>
      </div>
    </div>
  );
};
export default Card;
