import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Nav from "./Nav";

import whiskeyImage from "./images/whiskey.jpg"
import dukeImage from "./images/duke.jpg"
import perryImage from "./images/perry.jpg"

function App() {
  const defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskeyImage,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: dukeImage,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perryImage,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      }
    ]
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <BrowserRouter>
        <Nav dogs={defaultProps.dogs} />
        <div className="container">
          <RouteList dogs={defaultProps.dogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;