import React from "react";
import ReactDOM from "react-dom/client";
import QuestionList from "./QuestionList";

class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>HELLO WORLD! Welcome to Rails 7 </h1>
        <p className="lead">This is the first lecture</p>
        <QuestionList />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("welcome"));
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(<Welcome />, document.getElementById("welcome"));
// });

export default Welcome;
