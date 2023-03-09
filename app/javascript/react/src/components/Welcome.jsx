import React from "react";
import ReactDOM from "react-dom";

const Welcome = () => {
  return (
    <div className="container">
      <h1>HELLO WORLD! Welcome to Rails 7 </h1>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'));
});

export default Welcome;
