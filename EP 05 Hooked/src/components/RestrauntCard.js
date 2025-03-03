import { RESTRO_IMG_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resDetails } = props;
  // console.log(resDetails);
  const { name, cuisine, deliveryTime, costForTwo } = resDetails;
  const styleCard = {
    backgroundColor: "orange",
  };

  return (
    <div
      className="res-card w-72 h-80 bg-zinc-300 text-black p-2 "
      style={styleCard}
    >
      <img src={RESTRO_IMG_URL} alt="res-img" />
      <h1>{name}</h1>
      <h4>{cuisine}</h4>
      <p>{costForTwo}</p>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestrauntCard;
