const ExplorerService = require('./../services/ExplorerService')
const FizzbuzzService = require('./../services/FizzbuzzService')
const Reader = require('./../utils/Reader')

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersInNode.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }

    static getAmountOfExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission.length;
    }

    static applyValidationInNumber(number){
        const explorers = Reader.readJsonFile("explorers.json");
        if ( number%5 === 0 && number%3 === 0){
            return "FIZZBUZZ";
        }else if (number%5 === 0){
            return "BUZZ";
        }else if (number%3 === 0 ){
            return "FIZZ";
        }else{
            return number;
        }
    }
}

module.exports = ExplorerController