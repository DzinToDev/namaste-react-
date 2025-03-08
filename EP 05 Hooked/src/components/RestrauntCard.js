import { RESTRO_IMG_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  // console.log(resDetails);
  const {
    
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  
  const styleCard = {
    backgroundColor: "orange",
  };

  return (
    <div
      className="res-card w-72 bg-zinc-300  p-2 "
      style={styleCard}
    >
      <img src={RESTRO_IMG_URL} alt="res-img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
