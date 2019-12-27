import PekeLeken from "./PekeLeken/PekeLekenClass"

class Game {
    constructor(){
        this.members;
        this.completeGamesList = [{game: PekeLeken, name: "Peke Leken", weight}, {game: "yolo", name: "yolo"}]
        this.activeGames = []


        this.isGameName = function(element, gameName){
            console.log("IsGAme Name")
            let isPresent = false

            gameName.map((ele) =>{
                if(ele == element.name){
                    console.log("ELE == element", ele, element, element.name)
                    return isPresent = true
                }
            })

            console.log("is present ", isPresent)

            return isPresent
        }
    }

    _addMembers(members){
        this.members = members
    }

    _gameInitiate(){
        this.activeGames = []
        this.members;

        this.completeGamesList.map((ele) => {
            this.activeGames.push(ele)
        })
    }

    _deactivateGame(...gameName){

        for(let i = 0; i < this.activeGames.length; i++){
            if(this.isGameName(this.activeGames[i], gameName)){
                this.activeGames.splice(i, 1)
                i -= 1
            }
        }
        
    }
}

export default new Game()