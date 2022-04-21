import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';//importo

describe('Prueba en 02-template-string', () => { 
    
test('getSaludo debe retornar Hola fernando', () => { 
    const nombre = 'fernando';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola '+nombre+'!');
       
    })

    test('getSaludo debe retornar Hola Carlos! si no hay argumentos en nombre', () => { 
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
        
     })
})
