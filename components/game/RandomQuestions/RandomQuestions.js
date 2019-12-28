import questionsArray from "./questionsArray"

class RandomQuestions {
    constructor(){
        this.questionsArray = questionsArray
    }

    _pickRandomQuestion(player){
        let randomNumber = Math.floor(Math.random() * this.questionsArray.length)
        let regex = /!Person!/

        if(player) this.questionsArray[randomNumber].replace(regex, player)

        return this.questionsArray[randomNumber]
    }
}

export default new RandomQuestions()