import React from "react";
import renderer from "react-test-renderer";
import GenreScreen from "./genre-screen.jsx";

const mock = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: ``,
      genre: `rock`
    },
    {
      src: ``,
      genre: `pop`
    },
    {
      src: ``,
      genre: `jazz`
    },
    {
      src: ``,
      genre: `rock`
    }
  ]
};

it(`ArtistScreen correctly renders`, () => {
  const tree = renderer.create(<GenreScreen question={mock} />).toJSON();

  expect(tree).toMatchSnapshot();
});
