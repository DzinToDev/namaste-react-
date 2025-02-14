// create h1 and text inside it using js
// const h1 = document.createElement('h1');
// h1.textContent = 'Hello, World!';

// const root = document.getElementById('root');
// root.appendChild(h1);

// Now create a h1 and text inside it using react
const createH1 = React.createElement('h1', {}, "Hello world from react");
console.log(createH1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(createH1);


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

const parentDiv = React.createElement("div", {id: 'parent'}, )