import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

const mock = {
  gameSettings: {
    gameTime: 5,
    errorCount: 3
  },
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `rock`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `pop`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `jazz`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `rock`
        }
      ]
    },
    {
      type: `artist`,
      song: {
        artist: `Jim Beam`,
        src: `path.mp3`
      },
      answers: [
        {
          picture: `path.jpg`,
          artist: `John Snow`
        },
        {
          picture: `path.jpg`,
          artist: `Jack Daniels`
        },
        {
          picture: `path.jpg`,
          artist: `Jim Beam`
        }
      ]
    }
  ]
};

it(`On click on start button on WelcomeScreen App switches to GenreScreen`, () => {
  const app = mount(<App data={mock} />);
  const startButton = app.find(`.welcome__button`);

  startButton.simulate(`click`);
  app.update();

  const title = app.find(`.game__title`);
  const genreForm = app.find(`.game__tracks`);

  expect(title).toHaveLength(1);
  expect(genreForm).toHaveLength(1);
});

it(`The answer to the question about the genre switches to ArtistScreen`, () => {
  const app = mount(<App data={mock} />);

  app.setState({
    question: 0
  });
  app.update();

  const genreForm = app.find(`.game__tracks`);
  genreForm.simulate(`submit`, {
    prevetntDefault() {}
  });
  app.update();

  const artistForm = app.find(`.game__artist`);
  expect(artistForm).toHaveLength(1);
});

it(`The answer to the question about the artist switches to WelcomeScreen`, () => {
  const app = mount(<App data={mock} />);

  app.setState({
    question: 1
  });
  app.update();

  const artistForm = app.find(`.game__artist`);
  artistForm.simulate(`change`);
  app.update();

  const welcomeSection = app.find(`.welcome`);
  expect(welcomeSection).toHaveLength(1);
});
