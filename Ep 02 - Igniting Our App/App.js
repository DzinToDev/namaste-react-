import React from "react"; // it is come from our node module
import ReactDOM from "react-dom/client";
import "./index.css";

// const parentDiv = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is namaste react"),
//     React.createElement("h2", {}, "we have our own react in local"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "and it is come from our node module"),
//     React.createElement("h2", {}, "Parcel is doing lot of things for us behind the scenes"),
//   ]),
// ]);

const Header = () => {
  return (
    <nav className=" flex justify-between py-6 ">
      <div className="logo">
        <h1 className="text-[#b28670]">Coffee</h1>
      </div>
      <div>
        <ul className="menu flex gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const restData = [
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

const styleCard = {
  backgroundColor: "orange",
};
const RestrauntCard = (props) => {
  const { resDetails } = props;
  // console.log(resDetails);
  const { name, cuisine, deliveryTime, costForTwo } = resDetails;

  return (
    <div
      className="res-card w-72 h-80 bg-zinc-300 text-black p-2 "
      style={styleCard}
    >
      <img
        src="https://www.shutterstock.com/image-vector/shop-front-sketch-cafe-restaurant-600nw-2255610651.jpg"
        alt="res-img"
      />
      {/* <h1>{resDetails.name}</h1> */}
      {/* <h4>{resDetails.cuisine}</h4> */}
      <h1>{name}</h1>
      <h4>{cuisine}</h4>
      <p>{costForTwo}</p>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="py-10" style={{ color: "orange" }}>
        serch{" "}
      </div>
      <div className="res-container flex flex-wrap justify-evenly ">
        {/* <RestrauntCard resName="NBC" cuisine="Espresso"   /> */}
        {/* <RestrauntCard resDetails={restData[0]} /> 
        <RestrauntCard resDetails={restData[1]} />  */}
        {restData.map((restraunt, index) => (
          <RestrauntCard key={index} resDetails={restraunt} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app  px-10">
      <Header />
      <Body />
      {/* <h1>Hello, React!</h1> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(parentDiv);
