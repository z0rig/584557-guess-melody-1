import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders after relaunch`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(
      <WelcomeScreen
        time={0}
        errorCount={0}
        welcomeButtonHandler={clickHandler}
      />
  );

  const startButton = welcomeScreen.find(`.welcome__button`);

  startButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
