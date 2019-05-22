import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistScreen from "./artist-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

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
    }
  ]
};

it(`When user answers artist questions, onAnswer will be called`, () => {
  const onAnswer = jest.fn();
  const genreScreen = mount(
      <ArtistScreen question={mock} onAnswer={onAnswer} />
  );

  const form = genreScreen.find(`form`);
  form.simulate(`change`);

  expect(onAnswer).toHaveBeenCalledTimes(1);
});
