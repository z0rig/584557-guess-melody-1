import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import mockData from "./mocks/mockData.js";

const init = (data) => {
  ReactDOM.render(<App data={data} />, document.querySelector(`.main`));
};

init(mockData);
