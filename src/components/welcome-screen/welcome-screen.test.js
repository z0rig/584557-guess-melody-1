import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

it(`WelcomeScreen correctly renders`, () => {
  const tree = renderer
    .create(<WelcomeScreen time={3} errorCount={5} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
