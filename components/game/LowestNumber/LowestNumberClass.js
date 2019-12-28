
class LowestNumber {
    constructor(){
        this.members = []
        this.pickedNumbers = []
    }

    _addNumberToArray(number, member){
        this.pickedNumbers.push({number: parseInt(number), member: member})
    }

    _finishGame(){
        let lowestNumber = {number: ""}, peopleWhoNeedsToDrink = [];

        this.pickedNumbers.sort((a, b) => {
            return a.number - b.number
        })
        console.log("sorted Numbers", this.pickedNumbers)
        this.pickedNumbers.forEach((ele, index) => {
            if(ele.number == this.pickedNumbers[Math.abs(index-1)].number || ele.number == this.pickedNumbers[(index+1)%this.pickedNumbers.length].number){
                peopleWhoNeedsToDrink.push(ele)
            } else if (!lowestNumber.number || ele.number < lowestNumber.number){
                lowestNumber = ele
            }
        })

        return {lowestNumber, peopleWhoNeedsToDrink}
    }

    _addMembers(members){
        this.members = members
    }
}

export default new LowestNumber()