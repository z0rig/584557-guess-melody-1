import React from "react";
import renderer from "react-test-renderer";
import ArtistScreen from "./artist-screen.jsx";

const mock = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: ``
  },
  answers: [
    {
      picture: ``,
      artist: `John Snow`
    },
    {
      picture: ``,
      artist: `Jack Daniels`
    },
    {
      picture: ``,
      artist: `Jim Beam`
    }
  ]
};

it(`ArtistScreen correctly renders`, () => {
  const tree = renderer.create(<ArtistScreen question={mock} />).toJSON();

  expect(tree).toMatchSnapshot();
});
