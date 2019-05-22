import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const mock = {
  gameSettings: {
    gameTime: 5,
    errorCount: 3
  },
  questions: [{}]
};

it(`App correctly renders`, () => {
  const tree = renderer.create(<App data={mock} />).toJSON();

  expect(tree).toMatchSnapshot();
});
