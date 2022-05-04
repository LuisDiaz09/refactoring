const Fizzbuzz = require("./../../services/FizzbuzzService");


describe("Creando prueba de unidad para la clase FizzbuzzService", () => {

    test("Creando método para validar sobre un explorer FizzBuzz", () => { 
        const explorer1 = {name: "Explorer1", score: 5};
        const FizzbuzzInExplorers = Fizzbuzz.applyValidationInExplorer(explorer1);
        expect (FizzbuzzInExplorers.trick).toEqual(explorer1.trick = "BUZZ");
    });

    test("Creando método para validar FizzBuzz sobre un número", () => {
        const number = 5;
        const FizzbuzzInNumber = Fizzbuzz.applyValidationInNumber(number);
        expect (FizzbuzzInNumber).toEqual("BUZZ")
    })
});