import RestrauntCard from "./RestrauntCard";
import restData from "../utils/mockData";
const Body = () => {
  let loePticeRest = [
    {
      name: "Brew Haven",
      cuisine: "Cafe, Desserts",
      costForTwo: 500,
      deliveryTime: "30 mins",
    },
    {
      name: "Mocha Bliss",
      cuisine: "Coffee, Bakery",
      costForTwo: 400,
      deliveryTime: "25 mins",
    },
    {
      name: "Espresso Express",
      cuisine: "Coffee, Snacks",
      costForTwo: 350,
      deliveryTime: "20 mins",
    },
    {
      name: "Latte Lounge",
      cuisine: "Cafe, Italian",
      costForTwo: 600,
      deliveryTime: "35 mins",
    },
    {
      name: "Caffeine Corner",
      cuisine: "Coffee, Fast Food",
      costForTwo: 450,
      deliveryTime: "28 mins",
    },
  ];

  return (
    <div className="body">
      <button
        onClick={() => {
          // console.log("top resto");
          loePticeRest = loePticeRest.filter((res) => res.costForTwo <= 400);
          console.log(loePticeRest); // Filtered list ko print karega
        }}
        className="filter-top-resto-button p-2 bg-amber-100-300 rounded-xl my-3"
      >
        click
      </button>
      <div className="res-container flex flex-wrap justify-evenly ">
        {loePticeRest.map((restraunt, index) => (
          <RestrauntCard key={index} resDetails={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
