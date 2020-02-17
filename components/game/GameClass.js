import React from "react";

import PekeLeken from "./PekeLeken/PekeLekenClass";
import PekeLekenComponent from "./PekeLeken/PekeLekenComponent";

import RandomQuestions from "./RandomQuestions/RandomQuestions";
import RandomQuestionComponent from "./RandomQuestions/RandomQuestionComponent";

import TrueOrFalse from "./TrueOrFalse/BooleanScreen";

import LowestNumber from "./LowestNumber/LowestNumberClass";
import LowestNumberComponent from "./LowestNumber/LowestNumberComponent";
import TicTacToe from "./TicTacToe/Game";

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
      },
      {
        game: LowestNumber,
        name: "Lowest Number",
        weight: 1,
        component: <LowestNumberComponent />
      },
      {
        game: TicTacToe,
        name: "TicTacToe",
        weight: 1,
        component: <TicTacToe />
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

  _displayMembers() {
    return console.log("members", this.members);
  }

  _getMembers(){
    return this.members
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

  _getAllGames() {
    return this.completeGamesList;
  }

  _getRandomGame() {
    return this.completeGamesList[
      Math.floor(Math.random() * this.completeGamesList.length)
    ];
  }
}

export default new Game();
