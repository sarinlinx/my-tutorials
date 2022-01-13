// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a React component


const App = () => {
  const buttonText = { text: 'Click Me!' }; 

  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button> 
    </div>
  );
};

// Take the React component and show it on the screen
// 2 args, first is React component name within a self closing tag
// 2nd is reference to a DOM element in HTML file. This is located in /public/index.html
ReactDOM.render(<App />, document.querySelector('#root'))
