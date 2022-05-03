const ExplorerController = require ("./../../controllers/ExplorerController")

describe("Pruebas de unidad para la clase ExplorerController", () => {

    test('Creando un método para obtener la lista de explorers filtrados por misión', () => {
        const mission = "node";
        const explorersByMission = ExplorerController.getExplorersByMission(mission)
        expect(explorersByMission[0]).toMatchObject(/mission:"node"/);
     })

     
})