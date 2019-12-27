import PekeLeken from "./PekeLeken/PekeLekenClass";
import RandomQuestions from "./RandomQuestions/RandomQuestions";
import PekeLekenComponent from "./PekeLeken/PekeLekenComponent";

class Game {
  constructor() {
    this.members;
    this.completeGamesList = [
      { game: PekeLeken, name: "Peke Leken", weight: 1 },
      { game: RandomQuestions, name: "Random Questions", weight: 5 }
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
}

export default new Game();
