class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersInNode.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
}

module.exports = ExplorerService