import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreScreen from "./genre-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

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

it(`When user answers genre questions, form is not send`, () => {
  const onAnswer = jest.fn();
  const genreScreen = mount(
      <GenreScreen question={mock} onAnswer={onAnswer} />
  );

  const form = genreScreen.find(`form`);
  const formSendPreventation = jest.fn();

  form.simulate(`submit`, {preventDefault: formSendPreventation});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPreventation).toHaveBeenCalledTimes(1);
});
