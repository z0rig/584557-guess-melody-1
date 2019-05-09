import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App correctly renders`, () => {
  const tree = renderer.create(<App errorCount={3} gameTime={5} />).toJSON();

  expect(tree).toMatchSnapshot();
});
