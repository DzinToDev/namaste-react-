import { RESTRO_IMG_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  // console.log(resDetails);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;
  
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
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div className="">
        <h5 className="text-red-600">PROMOTED</h5>
        <RestrauntCard {...props} />
      </div>
    )
  }
}

export default RestrauntCard;
