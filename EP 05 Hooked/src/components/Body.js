import RestrauntCard from "./RestrauntCard";
import restData from "../utils/mockData";
import { useState, useEffect } from "react"; // we import this useState from React as named import.
const Body = () => {
  // local state variable - for that we use hooks which is known as usestate
  const [listOfRestaurants, setListOfRestaurants] = useState(restData);
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

  useEffect(() => {
    fetchData();
  }, []);
  // console.log("first body render then useEffect called");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // setListOfRestaurants(json.data.cards[2].data);
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json.data.cards);
  };

  // conditional rendering - rendering basis of condition is condition rendering.
  // if(listOfRestaurants.length=== 0){
  //       return <Shimmer /> // * Loading state when data is not loaded yet.
  // }

  // search
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <div className="filter-search-container flex justify-between">
        <div className="search">
          <input
            type="text"
            className="search-box border"
            // placeholder="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border ml-2 px-2"
            onClick={() => {
              // Filter the restaurants cards and update the ui
              console.log(searchText);
            const filteredRestraunt =  listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
              setListOfRestaurants(filteredRestraunt);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn border px-4 mb-6 bg-zinc-300 "
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container flex flex-wrap justify-evenly gap-7">
        {listOfRestaurants.map((restaurant, index) => (
          <RestrauntCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
