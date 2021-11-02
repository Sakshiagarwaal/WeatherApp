import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        className="searchBox"
        type={Text}
        placeHolder="Type City Name"
      ></input>
      <div>
        <div className="location">New York,US </div>
        <div className="date">Tuesday 2 November 2021</div>
      </div>
      <div className="temperature">10°c</div>
      <div className="temp">
        <div className="min temp_sibling">Min 4°c </div>
        <div className="max temp_sibling">Max 13°c</div>
      </div>
      <div className="weather">Clouds</div>
      <div>
        <button>Show More </button>
        <div>
          <div> Wind Speed 0km/miles</div>
        </div>
      </div>
    </div>
  );
}

export default App;
