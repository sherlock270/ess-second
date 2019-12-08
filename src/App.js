import React, { useState } from "react";
import "./main.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  const [pageNo, setPageNo] = useState(1);

  return (
    <div className="App">
      <h1 id="title">
        <strong>Page</strong> <small>Knowledge Check: Exercise</small>
        <hr />
      </h1>

      <div className="embed-responsive-item content-frame">
        {pageNo === 1 ? <Page1 /> : <Page2 />}
      </div>
      <button
        id="navBtn"
        onClick={() => {
          if (pageNo === 1) {
            setPageNo(2);
          } else {
            setPageNo(1);
          }
        }}
      >
        {pageNo === 1 ? "Next" : "Back"}
      </button>
      <br />
      <hr />
      <div>
        <h2>Instructions</h2>
        <ul>
          <li>
            {" "}
            The main document and iframe content each have their own css styles
            respectively.
          </li>
          <li>
            {" "}
            The challenge is to have the same functionality and styling without
            using an iframe.
          </li>
          <li>
            ** Make sure your solutions is supported throughout different
            browsers. **
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
