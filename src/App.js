import React from "react";
import moment from "moment";

function App() {
  return (
    <div className="app">
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>Aleczander Dela Cruz Portfolio</h1>
      <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')};
      </div>
    </div>
  );
}

export default App;
