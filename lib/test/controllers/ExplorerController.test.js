const ExplorerController = require ("./../../controllers/ExplorerController")

describe("Pruebas de unidad para la clase ExplorerController", () => {

    test('Creando un método para obtener la lista de explorers filtrados por misión', () => {
        const mission = "node";
        const explorersByMission = ExplorerController.getExplorersByMission(mission)
        expect(explorersByMission[0]).toMatchObject(/mission:"node"/);
     })

     test("Creando método para obtener el username de los explorers por misión", () => {
        const mission = "node";
        const usernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
        expect(usernamesByMission).toEqual(expect.arrayContaining(["ajolonauta1"]));
    });
})