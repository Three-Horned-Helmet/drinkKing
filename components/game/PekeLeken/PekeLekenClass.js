import claimsArrayImported from "./claimsArray";

class PekeLeken {
  constructor() {
    this.activeMembers = [];
    this.claimsArray = claimsArrayImported;
  }

  _addMembers(members) {
    members.map(ele => {
      this.activeMembers.push({ name: ele });
    });
  }

  _newClaim(members) {
    let randomClaim,
      newClaimsArray = [],
      lowestPickedNumber;

    if (!members) {
      members = this.activeMembers;
    }

    this.claimsArray = this.claimsArray.sort((a, b) => {
      return a.picked - b.picked;
    });

    lowestPickedNumber = this.claimsArray[0].picked;

    this.claimsArray.map(ele => {
      if (ele.picked == lowestPickedNumber) {
        newClaimsArray.push(ele);
      }
    });

    randomClaim = Math.floor(Math.random() * newClaimsArray.length);

    this.claimsArray.map(ele => {
      if (ele == newClaimsArray[randomClaim]) {
        ele.picked += 1;
      }
    });

    return newClaimsArray[randomClaim];
  }
}

export default new PekeLeken();
