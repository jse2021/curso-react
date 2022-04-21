import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('pruebas en funciones de heroes', () => { 
    test('debe retornar un heroe', () => { 
        const id = 2;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h=>h.id===id);
        expect(heroe).toEqual(heroeData);

     })
     test('debe retornar undefine si heroe no existe', () => { 
        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);

     })

     test('debe retornar un arreglo con los heroes de DC', () => { 
         const owner = 'DC';
         const heroes = getHeroesByOwner(owner);
         const heroesData = heroes.filter(h=>h.owner === owner);
         expect(heroes).toEqual(heroesData);
     })

     test('debe retornar un arreglo con los heroes de marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(2);
      })

 })