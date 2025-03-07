import RestrauntCard from "./RestrauntCard";
import restData from "../utils/mockData";
import { useState } from "react"; // we import this useState from React as named import.
const Body = () => {

  // local state variable - for that we use hooks which is known as usestate
  const [lowPriceRest, setLowPriceRest] = useState(restData);
  // const arr = useState(initialval) this is noamrla aray destructuring. this is behind the secene 
  // const [one, setOne] = arr
  // const one = arr[0];
  // const setOne = arr[1];

  // normal JS variable
  let someNormalVariJS = [];

  // let lowPriceRest = [
  //   {
  //     name: "Brew Haven",
  //     cuisine: "Cafe, Desserts",
  //     costForTwo: 500,
  //     deliveryTime: "30 mins",
  //   },
  //   {
  //     name: "Mocha Bliss",
  //     cuisine: "Coffee, Bakery",
  //     costForTwo: 400,
  //     deliveryTime: "25 mins",
  //   },
  //   {
  //     name: "Espresso Express",
  //     cuisine: "Coffee, Snacks",
  //     costForTwo: 350,
  //     deliveryTime: "20 mins",
  //   },
  //   {
  //     name: "Latte Lounge",
  //     cuisine: "Cafe, Italian",
  //     costForTwo: 600,
  //     deliveryTime: "35 mins",
  //   },
  //   {
  //     name: "Caffeine Corner",
  //     cuisine: "Coffee, Fast Food",
  //     costForTwo: 450,
  //     deliveryTime: "28 mins",
  //   },
  // ];

  return (
    <div className="body">
      <button
        onClick={() => {
          // console.log("top resto");
          // lowPriceRest = lowPriceRest.filter(
          //   (res) => res.costForTwo <= 400);
          // console.log(lowPriceRest); // Filtered list ko print karega
          const filetredList = lowPriceRest.filter(
            (res) => res.costForTwo <= 400
          );
          setLowPriceRest(filetredList);
          // when ever i click on this button new object is formed and react find out diff btwn these two obj then it actually updates the dom. 
        }}
        className="filter-top-resto-button py-1 bg-amber-100-300 rounded-xl my-3 border px-4 bg-zinc-200"
      >
        filter low price
      </button>
      <div className="res-container flex flex-wrap justify-evenly ">
        {lowPriceRest.map((restraunt, index) => (
          <RestrauntCard key={index} resDetails={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
