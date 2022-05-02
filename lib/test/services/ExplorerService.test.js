const ExplorerService = require('./../../services/ExplorerService')
const Reader = require("./../../utils/Reader")

describe("Prueba de unidad para la clase Explorer Service", () => {
    const explorer = Reader.readJsonFile("explorers.json")

    test('Obtener los explorers que tienen node en mission', () => { 
        const explorersInNode = ExplorerService.filterByMission(explorer, "node")
        expect(explorersInNode[0]).toMatchObject(/mission:"node"/)
     });

     test('Obtener la cantidad de explorers por mission', () => {
        const explorersByMission = ExplorerService.getAmountOfExplorersByMission(explorer, "node")
        expect(explorersByMission.length).toBe(9)
    });
})