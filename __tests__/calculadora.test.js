import {somar} from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 5;
        const b = 7;

        // Act (Executar)
        const resultado = a + b;

        // Assert (Verificar)
        expect(resultado).toBe(12);
    });
})