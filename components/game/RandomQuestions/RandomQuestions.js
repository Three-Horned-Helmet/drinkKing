import questionsArray from "./questionsArray"

class RandomQuestions {
    constructor(){
        this.questionsArray = questionsArray
    }

    _pickRandomQuestion(player){
        let randomNumber = Math.floor(Math.Random() * this.questionsArray.length)
        let regex = /!Person!/

        this.questionsArray[randomNumber].replace(regex, player)

        return this.questionsArray[randomNumber]
    }
}

export default new RandomQuestions()