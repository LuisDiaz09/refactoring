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
}

module.exports = ExplorerController