import RestrauntCard from "./RestrauntCard";
import restData from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="py-10" style={{ color: "orange" }}>
        serch{" "}
      </div>
      <div className="res-container flex flex-wrap justify-evenly ">
        {restData.map((restraunt, index) => (
          <RestrauntCard key={index} resDetails={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
