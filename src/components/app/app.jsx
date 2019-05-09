import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errorCount, gameTime} = props;

  return (
    <WelcomeScreen
      time={gameTime}
      errorCount={errorCount}
      welcomeButtonHandler={() => {
        return 1;
      }}
    />
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired
};

export default App;
