import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Prueba con promesas', () => { 
    test('debe retornar un heroe async', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe=>{
            expect(heroe).toBe(heroes[0]);
            //done corta, avisa que termina todo el proceso  
            done();

        })
     })
     test('debe obtener un error si herore por id no existe', (done) => { 
         const id = 10;
         getHeroeByIdAsync(id)
         .catch(error=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
         })
      })
 })