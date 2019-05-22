import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GenreScreen from "../genre-screen/genre-screen.jsx";
import ArtistScreen from "../artist-screen/artist-screen.jsx";

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {gameTime, errorCount} = props.data.gameSettings;

      return (
        <WelcomeScreen
          time={gameTime}
          errorCount={errorCount}
          onStartButtonClick={onUserAnswer}
        />
      );
    }

    const {questions} = props.data;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GenreScreen question={currentQuestion} onAnswer={onUserAnswer} />
        );

      case `artist`:
        return (
          <ArtistScreen question={currentQuestion} onAnswer={onUserAnswer} />
        );
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };
  }

  render() {
    const {questions} = this.props.data;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState({
        question: question + 1 >= questions.length ? -1 : question + 1
      });
    });
  }
}

App.propTypes = {
  data: PropTypes.shape({
    gameSettings: PropTypes.shape({
      gameTime: PropTypes.number.isRequired,
      errorCount: PropTypes.number.isRequired
    }),
    questions: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

export default App;
