import React from "react";
import PekeLeken from "./PekeLeken/PekeLekenClass";
import RandomQuestions from "./RandomQuestions/RandomQuestions";
import PekeLekenComponent from "./PekeLeken/PekeLekenComponent";
import RandomQuestionComponent from "./RandomQuestions/RandomQuestionComponent";
import TrueOrFalse from "./TrueOrFalse/BooleanScreen";

class Game {
  constructor() {
    this.members;
    this.completeGamesList = [
      {
        game: PekeLeken,
        name: "Peke Leken",
        weight: 1,
        component: <PekeLekenComponent />
      },
      {
        game: RandomQuestions,
        name: "Random Questions",
        weight: 5,
        component: <RandomQuestionComponent />
      },
      {
        game: "",
        name: "True or False",
        weight: 3,
        component: <TrueOrFalse />
      }
    ];
    this.activeGames = [];

    this.isGameName = function(element, gameName) {
      let isPresent = false;

      gameName.map(ele => {
        if (ele == element.name) {
          return (isPresent = true);
        }
      });

      return isPresent;
    };
  }

  _addMembers(members) {
    this.members = members;
  }

  _gameInitiate() {
    this.activeGames = [];
    this.members;

    this.completeGamesList.map(ele => {
      this.activeGames.push(ele);
    });
  }

  _deactivateGame(...gameName) {
    for (let i = 0; i < this.activeGames.length; i++) {
      if (this.isGameName(this.activeGames[i], gameName)) {
        this.activeGames.splice(i, 1);
        i -= 1;
      }
    }
  }

  _displayMembers() {
    return console.log("members", this.members);
  }

  _getAllGames() {
    return this.completeGamesList;
  }

  _getRandomGame() {
    return this.completeGamesList[
      Math.floor(Math.random() * this.completeGamesList.length)
    ];
  }

  _getOneGame() {
    return this.completeGamesList;
  }

  _endGame() {
    console.log("end game", this.completeGamesList[1].name);
    this.completeGamesList.shift();
    console.log("game has been ended", this.completeGamesList[0].name);
  }
}

export default new Game();
