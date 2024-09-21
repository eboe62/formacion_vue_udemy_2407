// sum.test.js
import { describe, expect, test } from 'vitest'
import { sum, addArray } from '../../src/helpers/sum'

// Con describe podemos agrupar todas las pruebas correspondientes para cada función de la clase a testear
describe('add function', () => {
    test('adds 1 + 2 to equal 3', () => {
    // Opción: Arreglar-Arrange / Actuar-Act / Afirmar-Assert
        // Preparación ó Arreglar-Arrange
        const a = 1;
        const b = 2;

        // Estímulo ó Actuar-Act
        const result = sum(a, b);

        // Comportamiento esperado ó Afirmar-Assert
        expect( result ).toBe(a + b);
    });

});

describe('addArray function', () => {
    test('should return 0 if the array is empty', () => {
        const numberArray: number[] = [];
        const result = addArray(numberArray);
        console.log({ result })
        expect ( result ).toBe(0);
    });
    test('should return the proper value of the addArray function', () => {
        const numberArray: number[] = [1, 2, 3, 4, 5];
        const result = addArray(numberArray);
        console.log({ result })
        expect ( result ).toBe(15);
    });
});