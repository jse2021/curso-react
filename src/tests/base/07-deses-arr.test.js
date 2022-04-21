import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuracion', () => { 
    test('Debe retornar un string y un numero', () => { 
        const [letras,numeros] = retornaArreglo();
        console.log(typeof letras)
        expect(typeof letras).toBe('string');
        //expect(letras).toBe('ABC');
     })
 })