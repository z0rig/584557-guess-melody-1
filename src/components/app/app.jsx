/* eslint-disable react/prop-types */
import React from "react";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errorCount, gameTime} = props;

  return <WelcomeScreen time={gameTime} errorCount={errorCount} />;
};

export default App;
