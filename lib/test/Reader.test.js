const Reader = require("./../utils/Reader");

describe ("Prueba de unidad para la clase Reader", () => {
    test("Creando un método para leer y obtener la información dado el nombre del archivo", () => { 
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers.name).not.toBeUndefined;
    });
});