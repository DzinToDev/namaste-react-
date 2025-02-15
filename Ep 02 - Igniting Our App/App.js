// how to create nested html structure inside react
/**
 *  <div id="parent">
            <div id="child">
                <h1>am h1</h1>
                <h2>am h1</h2>
            </div>
            <div id="child2">
                <h1>am h1</h1>
                <h2>am h1</h2>
            </div>
        </div>
 */

const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm nested h1"),
    React.createElement("h2", {}, "I'm sibling h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm nested h1"),
    React.createElement("h2", {}, "I'm sibling h2"),
  ]),
]);
root.render(parentDiv);
